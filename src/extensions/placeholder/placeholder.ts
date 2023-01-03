import { Editor, Extension } from "@tiptap/core";

import {
  PMNode,
  PMPlugin,
  PMPluginKey,
  Decoration,
  DecorationSet
} from "../../prosemirror";
import i18n from "../../i18n";

export interface PlaceholderOptions {
  emptyEditorClass: string;
  emptyNodeClass: string;
  placeholder:
    | ((PlaceholderProps: {
        editor: Editor;
        node: PMNode;
        pos: number;
        hasAnchor: boolean;
      }) => string)
    | string;
  showOnlyWhenEditable: boolean;
  showOnlyCurrent: boolean;
  includeChildren: boolean;
  maxContentSize?: number;
}

export const Placeholder = Extension.create<PlaceholderOptions>({
  name: "placeholder",

  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: i18n('placeholder'),
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: true,
      maxContentSize: 2000,
    };
  },

  // @ts-ignore
  addProseMirrorPlugins() {
    return [
      new PMPlugin({
        key: new PMPluginKey("placeholder"),
        props: {
          decorations: ({ doc, selection }) => {
            const active =
              this.editor.isEditable || !this.options.showOnlyWhenEditable;

            if (doc.content.size > (this.options.maxContentSize || 2000)) {
              return null
            }

            if (!active) {
              return null;
            }

            const { anchor } = selection;
            const decorations: Decoration[] = [];

            doc.descendants((node, pos) => {
              const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
              const isEmpty =
                (!node.isLeaf && !node.childCount) ||
                (node.type.name === "magicBlock" && node.nodeSize <= 4);

              if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
                const classes = [this.options.emptyNodeClass];

                if (this.editor.isEmpty) {
                  classes.push(this.options.emptyEditorClass);
                }

                const decoration = Decoration.node(pos, pos + node.nodeSize, {
                  class: classes.join(" "),
                  "data-placeholder":
                    typeof this.options.placeholder === "function"
                      ? this.options.placeholder({
                          editor: this.editor,
                          node,
                          pos,
                          hasAnchor
                        })
                      : this.options.placeholder
                });

                decorations.push(decoration);
              }

              return this.options.includeChildren;
            });

            return DecorationSet.create(doc, decorations);
          }
        }
      })
    ];
  }
});
