import React from "react";
import { mergeAttributes, Node, posToDOMRect } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import Suggestion from "@tiptap/suggestion";
import tippy, { Instance } from "tippy.js";

import { PMNode, PMPluginKey } from "../../prosemirror";
import { getEditorProvider } from "../../editor/provider";

import { MentionMenuView, MentionLoading } from "./mention-menu-view";

export interface MentionOptions {
  HTMLAttributes: {};
  char: string;
  renderLabel: (arg: { options: MentionOptions; node: PMNode }) => string;
}

export const Mention = Node.create<MentionOptions>({
  name: "mention",
  group: "inline",
  inline: true,
  selectable: false,
  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
      renderLabel({ options, node }) {
        return `${options.char}${node.attrs.name ?? node.attrs.id}`;
      },
      char: "@"
    };
  },

  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: element => element.getAttribute("data-id"),
        renderHTML: attributes => {
          if (!attributes.id) {
            return {};
          }

          return {
            "data-id": attributes.id
          };
        }
      },

      name: {
        default: null,
        parseHTML: element => element.getAttribute("data-name"),
        renderHTML: attributes => {
          if (!attributes.name) {
            return {};
          }

          return {
            "data-name": attributes.name
          };
        }
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: `span[data-type="${this.name}"]`
      }
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(
        { "data-type": this.name },
        this.options.HTMLAttributes,
        HTMLAttributes
      ),
      this.options.renderLabel({
        options: this.options,
        node
      })
    ];
  },

  renderText({ node }) {
    return this.options.renderLabel({
      options: this.options,
      node
    });
  },

  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        this.editor.commands.command(({ tr, state }) => {
          let isMention = false;
          const { selection } = state;
          const { empty, anchor } = selection;

          if (!empty) {
            return false;
          }

          state.doc.nodesBetween(anchor - 1, anchor, (node, pos) => {
            if (node.type.name === this.name) {
              isMention = true;
              tr.insertText(this.options.char || "", pos, pos + node.nodeSize);

              return false;
            }
          });

          return isMention;
        })
    };
  },

  addStorage() {
    return {
      timer: null,
      onDestroy: () => {}
    };
  },

  onDestroy() {
    this.storage.onDestroy();
  },

  addProseMirrorPlugins() {
    let component: any;
    let popup: Instance[];

    let loadingPopup: Instance;
    let loadingComponent: any;

    const getReferenceClientRect = () => {
      const { ranges } = this.editor.state.selection;

      const from = Math.min(...ranges.map(range => range.$from.pos));
      const to = Math.max(...ranges.map(range => range.$to.pos));
      return posToDOMRect(this.editor.view, from, to);
    };

    return [
      Suggestion({
        editor: this.editor,
        char: this.options.char,
        pluginKey: new PMPluginKey(this.name),

        items: ({ query }) => {
          const editorProvider = getEditorProvider(this.editor);
          const getUsers = editorProvider?.userProvider?.getUsers;

          if (!getUsers) return [];

          popup?.[0]?.destroy?.();
          const maybePromise = getUsers(query);

          if ("then" in maybePromise) {
            if (!loadingPopup) {
              loadingComponent = new ReactRenderer(MentionLoading, {
                editor: this.editor
              });

              loadingPopup = tippy("body", {
                getReferenceClientRect,
                appendTo: () => document.body,
                content: loadingComponent.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start"
              })[0];

              this.storage.onDestroy = () => {
                loadingPopup?.destroy();
                loadingComponent?.destroy();
              };
            }

            let shouldShow = true;

            clearTimeout(this.storage.timer);
            this.storage.timer = setTimeout(() => {
              if (shouldShow) {
                loadingPopup?.show();
              }
            }, 300);

            return maybePromise.then(res => {
              shouldShow = false;
              clearTimeout(this.storage.timer);
              return res;
            });
          } else {
            return maybePromise;
          }
        },

        command: ({ editor, range, props }) => {
          const nodeAfter = editor.view.state.selection.$to.nodeAfter;
          const overrideSpace = nodeAfter?.text?.startsWith(" ");

          if (overrideSpace) {
            range.to += 1;
          }

          editor
            .chain()
            .focus()
            .insertContentAt(range, [
              {
                type: this.name,
                attrs: props
              },
              {
                type: "text",
                text: " "
              }
            ])
            .run();
        },

        allow: ({ state, range }) => {
          const $from = state.doc.resolve(range.from);
          const type = state.schema.nodes[this.name];
          const allow = !!$from.parent.type.contentMatch.matchType(type);

          return allow;
        },

        render: () => {
          return {
            onStart: props => {
              component = new ReactRenderer(MentionMenuView, {
                props,
                editor: props.editor
              });

              popup = tippy("body", {
                getReferenceClientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                placement: "bottom-start",
                onShow() {
                  loadingPopup?.hide();
                }
              });

              /**
               * 异步查询导致 UI 变化滞后
               */
              if (!props.query) {
                const text = props.editor.state.doc.textBetween(
                  props.range.from,
                  props.range.to
                );

                if (!text) {
                  popup?.[0]?.destroy?.();
                  component?.destroy?.();
                }
              }
            },

            onUpdate(props) {
              component.updateProps(props);
              popup?.[0]?.setProps({
                // @ts-ignore
                getReferenceClientRect: props.clientRect
              });
            },

            onKeyDown(props) {
              if (props.event.key === "Escape") {
                popup?.[0]?.hide();
                return true;
              }

              return component?.ref?.onKeyDown(props);
            },

            onExit() {
              popup?.[0]?.destroy?.();
              component?.destroy?.();
            }
          };
        }
      })
    ];
  }
});
