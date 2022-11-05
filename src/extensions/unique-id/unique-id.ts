import { Extension, findChildren, findChildrenInRange } from "@tiptap/core";
import { v4 as uuidv4 } from "uuid";

import {
  PMPlugin,
  PMPluginKey,
  Transaction,
  Slice,
  Fragment,
  PMNode
} from "../../prosemirror";

import combineTransactionSteps from "./utilities/combine-transaction-steps";
import getChangedRanges from "./utilities/get-changed-ranges";
import findDuplicates from "./utilities/find-duplicates";
import { EXTENSION_PRIORITY_HIGHEST } from "../../constants";

export interface UniqueIDOptions {
  attributeName: string;
  types: string[];
  generateID: () => any;
  filterTransaction: ((transaction: Transaction) => boolean) | null;
}

export const UniqueID = Extension.create<UniqueIDOptions>({
  name: "uniqueID",
  priority: EXTENSION_PRIORITY_HIGHEST,

  addOptions() {
    return {
      attributeName: "blockId",
      types: [
        "heading",
        "paragraph",
        "orderedList",
        "bulletList",
        "flow",
        "mind",
        "excalidraw",
        "status",
        "table",
        "iframe",
        "codeBlock",
        "blockquote",
        "columns",
        "image"
      ],
      generateID: () => uuidv4(),
      filterTransaction: null
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          [this.options.attributeName]: {
            default: null,
            parseHTML: element =>
              element.getAttribute(`data-${this.options.attributeName}`),
            renderHTML: attributes => {
              if (!attributes[this.options.attributeName]) {
                return {};
              }

              return {
                [`data-${this.options.attributeName}`]: attributes[
                  this.options.attributeName
                ]
              };
            }
          }
        }
      }
    ];
  },

  // check initial content for missing ids
  onCreate() {
    const { view, state } = this.editor;
    const { tr, doc } = state;
    const { types, attributeName, generateID } = this.options;
    const nodesWithoutId = findChildren(doc, node => {
      return (
        types.includes(node.type.name) && node.attrs[attributeName] === null
      );
    });

    nodesWithoutId.forEach(({ node, pos }) => {
      tr.setNodeMarkup(pos, undefined, {
        ...node.attrs,
        [attributeName]: generateID()
      });
    });

    view.dispatch(tr);
  },

  addProseMirrorPlugins() {
    let dragSourceElement: Element | null = null;
    let transformPasted = false;

    return [
      new PMPlugin({
        key: new PMPluginKey("uniqueID"),

        appendTransaction: (transactions, oldState, newState) => {
          const docChanges =
            transactions.some(transaction => transaction.docChanged) &&
            !oldState.doc.eq(newState.doc);
          const filterTransactions =
            this.options.filterTransaction &&
            transactions.some(tr => !this.options.filterTransaction?.(tr));

          if (!docChanges || filterTransactions) {
            return;
          }

          const { tr } = newState;
          const { types, attributeName, generateID } = this.options;
          // @ts-ignore
          const transform = combineTransactionSteps(oldState.doc, transactions);
          const { mapping } = transform;

          // get changed ranges based on the old state
          const changes = getChangedRanges(transform);

          changes.forEach(change => {
            const newRange = {
              from: change.newStart,
              to: change.newEnd
            };

            const newNodes = findChildrenInRange(
              newState.doc,
              newRange,
              node => {
                return types.includes(node.type.name);
              }
            );

            const newIds = newNodes
              .map(({ node }) => node.attrs[attributeName])
              .filter(id => id !== null);

            const duplicatedNewIds = findDuplicates(newIds);

            newNodes.forEach(({ node, pos }) => {
              // instead of checking `node.attrs[attributeName]` directly
              // we look at the current state of the node within `tr.doc`.
              // this helps to prevent adding new ids to the same node
              // if the node changed multiple times within one transaction

              const id = tr.doc.nodeAt(pos)?.attrs[attributeName];

              if (id === null) {
                tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  [attributeName]: generateID()
                });

                return;
              }

              // check if the node doesn’t exist in the old state
              const { deleted } = mapping.invert().mapResult(pos);
              const newNode = deleted && duplicatedNewIds.includes(id);

              if (newNode) {
                tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  [attributeName]: generateID()
                });
              }
            });
          });

          if (!tr.steps.length) {
            return;
          }

          return tr;
        },

        // we register a global drag handler to track the current drag source element
        view(view) {
          const handleDragstart = (event: DragEvent) => {
            dragSourceElement = view.dom.parentElement?.contains(
              event.target as Element
            )
              ? view.dom.parentElement
              : null;
          };

          window.addEventListener("dragstart", handleDragstart);

          return {
            destroy() {
              window.removeEventListener("dragstart", handleDragstart);
            }
          };
        },

        props: {
          // @ts-ignore
          handleDOMEvents: {
            drop: (view, event) => {
              if (
                dragSourceElement !== view.dom.parentElement ||
                event.dataTransfer?.effectAllowed === "copy"
              ) {
                dragSourceElement = null;
                transformPasted = true;
              }

              return false;
            },
            // always create new ids on pasted content
            paste: () => {
              transformPasted = true;

              return false;
            }
          },

          // we’ll remove ids for every pasted node
          // so we can create a new one within `appendTransaction`
          transformPasted: slice => {
            if (!transformPasted) {
              return slice;
            }

            const { types, attributeName } = this.options;
            const removeId = (fragment: Fragment): Fragment => {
              const list: PMNode[] = [];

              fragment.forEach(node => {
                // don’t touch text nodes
                if (node.isText) {
                  list.push(node);

                  return;
                }

                // check for any other child nodes
                if (!types.includes(node.type.name)) {
                  list.push(node.copy(removeId(node.content)));

                  return;
                }

                // remove id
                const nodeWithoutId = node.type.create(
                  {
                    ...node.attrs,
                    [attributeName]: null
                  },
                  removeId(node.content),
                  node.marks
                );
                list.push(nodeWithoutId);
              });

              return Fragment.from(list);
            };

            // reset check
            transformPasted = false;

            return new Slice(
              removeId(slice.content),
              slice.openStart,
              slice.openEnd
            );
          }
        }
      })
    ];
  }
});
