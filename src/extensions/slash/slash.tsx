import React from "react";
import { Editor, Node, posToDOMRect } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import Suggestion from "@tiptap/suggestion";
import tippy, { Instance } from "tippy.js";

import { PMPluginKey } from "../../prosemirror";
import { EXTENSION_PRIORITY_HIGHEST } from "../../constants";

import { SlashMenuView } from "./slash-menu-view";

export type SlashMenuItem =
  | {
      icon: React.ReactNode;
      text: string;
      slash: string;
      action: (editor: Editor) => void;
    }
  | { divider: true; title: string };

export interface SlashOptions {
  items: SlashMenuItem[];
  pluginKey: string;
  char: string;
}

export const createSlash = (name: string, options?: SlashOptions) => {
  return Node.create<SlashOptions>({
    name: name,
    priority: EXTENSION_PRIORITY_HIGHEST,
  
    addOptions() {
      return {
        char: "/",
        pluginKey: "slash",
        items: [],
        ...(options ?? {})
      };
    },
  
    addProseMirrorPlugins() {
      return [
        Suggestion({
          editor: this.editor,
          char: this.options.char,
          pluginKey: new PMPluginKey(this.options.pluginKey),
  
          command: ({ editor, props }) => {
            const { state, dispatch } = editor.view;
            const { $head, $from } = state.selection;
  
            const end = $from.pos;
            const from = $head?.nodeBefore?.text
              ? end -
                $head.nodeBefore.text.substring(
                  $head.nodeBefore.text.indexOf("/")
                ).length
              : $from.start();
  
            const tr = state.tr.deleteRange(from, end);
            dispatch(tr);
            props?.action?.(editor, props.user);
            editor?.view?.focus();
          },
  
          items: ({ query }) => {
            if (!query) return this.options.items;
  
            const filter = this.options.items.filter(item => {
              if ("divider" in item) return true;
  
              return item.text.includes(query) || item.slash.includes(query);
            });
  
            if (filter.every(item => "divider" in item)) return [];
  
            return filter.filter((item, index, arr) => {
              if (!("divider" in item)) return true;
  
              return arr[index + 1] ? !("divider" in arr[index + 1]) : false;
            });
          },
  
          render: () => {
            let component: ReactRenderer;
            let popup: Instance[];
            let isEditable: boolean;
  
            const getReferenceClientRect = () => {
              const { ranges } = this.editor.state.selection;
              const from = Math.min(...ranges.map(range => range.$from.pos));
              const to = Math.max(...ranges.map(range => range.$to.pos));
              return posToDOMRect(this.editor.view, from, to);
            };
  
            return {
              onStart: props => {
                isEditable = props.editor.isEditable;
                if (!isEditable) return;
  
                component = new ReactRenderer(SlashMenuView, {
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
                  placement: "bottom-start"
                });
              },
  
              onUpdate(props) {
                if (!isEditable) return;
                component.updateProps(props);
                popup[0].setProps({
                // @ts-ignore
                  getReferenceClientRect: props.clientRect
                });
              },
  
              onKeyDown(props) {
                if (!isEditable) return;
  
                if (props.event.key === "Escape") {
                  popup[0].hide();
                  return true;
                }
                // @ts-ignore
                return component.ref?.onKeyDown(props);
              },
  
              onExit() {
                if (!isEditable) return;
                popup[0].destroy();
                component.destroy();
              }
            };
          }
        })
      ];
    }
  })
};
