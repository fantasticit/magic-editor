import { mergeAttributes } from "@tiptap/core";
import { Heading as BuiltInHeading } from "@tiptap/extension-heading";
import {
  PMPlugin,
  PMPluginKey,
  Decoration,
  DecorationSet,
  TextSelection,
  findBlockNodes
} from "../../prosemirror";
import { FOLD_SVG } from "./constants";
import { headingToPersistenceKey } from "./slug";
import { handleFoldContent, findCollapsedNodes } from "./utilities";

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingOptions {
  levels: Level[];
  HTMLAttributes: Record<string, any>;
  offset: number;
}

export const Heading = BuiltInHeading.extend<HeadingOptions>({
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {},
      offset: 0
    };
  },

  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: false
      },
      collapsed: {
        default: undefined
      }
    };
  },

  addStorage() {
    return {
      editor: null
    };
  },

  onCreate() {
    this.storage.editor = this.editor;
  },

  renderHTML({ HTMLAttributes, node }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level = hasLevel ? node.attrs.level : this.options.levels[0];

    const fold = document.createElement("button");
    fold.innerText = "";
    fold.innerHTML = FOLD_SVG;
    fold.type = "button";
    fold.className = `heading-fold ${node.attrs.collapsed ? "collapsed" : ""}`;
    fold.addEventListener("mousedown", event => handleFoldContent(event, this));

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      [
        "span",
        {
          contentEditable: false,
          class: `heading-actions ${node.attrs.collapsed ? "collapsed" : ""}`
        },
        fold
      ],
      [
        "span",
        {
          class: "heading-content"
        },
        0
      ]
    ];
  },

  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (items, level) => ({
        ...items,
        ...{
          [`Mod-Alt-${level}`]: () =>
            this.editor.commands.toggleHeading({ level })
        }
      }),
      {
        Backspace: ({ editor }) => {
          const { state, view } = editor;
          const { $from, from, to, empty } = state.selection;

          if (!empty) return false;

          if ($from.parent.type.name !== this.name) return false;

          const $pos = state.doc.resolve(from - 1);
          if ($pos.parent === $from.parent) return false;

          view.dispatch(
            state.tr
              .setBlockType(from, to, state.schema.nodes.paragraph)
              .scrollIntoView()
          );

          return true;
        },
        Enter: ({ editor }) => {
          const { state, view } = editor;
          const { $from, from, $to, to } = state.selection;

          if ($from.parent.type.name !== this.name) return false;

          const endPos = $to.after() - 1;
          if (endPos !== to) return false;

          if (!$from.parent.attrs.collapsed) return false;

          const allBlocks = findBlockNodes(state.doc);
          const collapsedBlocks = findCollapsedNodes(state.doc);
          const visibleBlocks = allBlocks.filter(
            a => !collapsedBlocks.find(b => b.pos === a.pos)
          );
          const nextVisibleBlock = visibleBlocks.find(a => a.pos > from);
          const pos = nextVisibleBlock
            ? nextVisibleBlock.pos
            : state.doc.content.size;

          const transaction = state.tr.insert(
            pos,
            state.schema.nodes[this.name].create({
              ...$from.parent.attrs,
              collapsed: false
            })
          );

          view.dispatch(
            transaction
              .setSelection(
                TextSelection.near(
                  transaction.doc.resolve(
                    Math.min(pos + 1, transaction.doc.content.size)
                  )
                )
              )
              .scrollIntoView()
          );

          return true;
        }
      }
    );
  },

  addProseMirrorPlugins() {
    let loaded = false;

    return [
      new PMPlugin({
        key: new PMPluginKey("folding"),
        view(view) {
          loaded = false;
          view.dispatch(view.state.tr.setMeta("folding", { loaded: true }));
          return {};
        },
        appendTransaction: (transactions, oldState, newState) => {
          if (loaded) return;

          if (
            !transactions.some(transaction => transaction.getMeta("folding"))
          ) {
            return;
          }

          let modified = false;
          const tr = newState.tr;
          const blocks = findBlockNodes(newState.doc);

          for (const block of blocks) {
            if (block.node.type.name === "heading") {
              const persistKey = headingToPersistenceKey(
                block.node,
                // @ts-ignore
                this.editor.options.editorProps.id
              );
              const persistedState = localStorage?.getItem(persistKey);

              if (persistedState === "collapsed") {
                tr.setNodeMarkup(block.pos, undefined, {
                  ...block.node.attrs,
                  collapsed: true
                });
                modified = true;
              }
            }
          }

          loaded = true;
          return modified ? tr : null;
        },

        props: {
          decorations: state => {
            const { doc } = state;
            const decorations: Decoration[] = findCollapsedNodes(doc).map(
              block =>
                Decoration.node(block.pos, block.pos + block.node.nodeSize, {
                  class: "folded-content"
                })
            );
            return DecorationSet.create(doc, decorations);
          }
        }
      })
    ];
  }
});
