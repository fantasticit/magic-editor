import BuiltInCodeBlock, {
  CodeBlockOptions
} from "@tiptap/extension-code-block";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { lowlight } from "lowlight/lib/all";

import { findParentNode, PMNode } from "../../prosemirror";
import { EXTENSION_PRIORITY_HIGHEST } from "../../constants";

import { LowlightPlugin } from "./lowlight-plugin";
import { CodeBlockView } from "./code-block-view";

interface CodeBlockLowlightOptions extends CodeBlockOptions {
  lowlight: any;
  defaultLanguage: string | null | undefined;
}

export const CodeBlock = BuiltInCodeBlock.extend<CodeBlockLowlightOptions>({
  draggable: true,
  priority: EXTENSION_PRIORITY_HIGHEST,

  addOptions() {
    return {
      ...this.parent?.(),
      lowlight: {},
      defaultLanguage: null
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(CodeBlockView);
  },

  // @ts-ignore
  addProseMirrorPlugins() {
    return [
      ...(this.parent?.() || []),
      LowlightPlugin({
        name: this.name,
        lowlight: this.options.lowlight,
        defaultLanguage: this.options.defaultLanguage
      })
    ];
  },

  addKeyboardShortcuts() {
    return {
      ...this?.parent?.(),
      Enter: ({ editor }) => {
        const predicate = (node: PMNode) =>
          node.type === editor.view.state.schema.nodes.codeBlock;
        const node = findParentNode(predicate)(editor.state.selection);

        if (!node) return false;

        const { $from } = editor.state.selection;

        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");

        if (isAtEnd && endsWithDoubleNewline) {
          return editor
            .chain()
            .command(({ tr }) => {
              tr.delete($from.pos - 2, $from.pos);

              return true;
            })
            .exitCode()
            .run();
        }

        return editor.commands.newlineInCode();
      }
    };
  }
}).configure({
  lowlight,
  defaultLanguage: "auto"
});
