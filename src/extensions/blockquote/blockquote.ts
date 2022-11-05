import { wrappingInputRule } from "@tiptap/core";
import { Blockquote as BuiltInBlockquote } from "@tiptap/extension-blockquote";

const multilineInputRegex = /^\s*>>>\s$/gm;

export const Blockquote = BuiltInBlockquote.extend({
  addInputRules() {
    return [
      // eslint-disable-next-line no-unsafe-optional-chaining
      // @ts-ignore
      ...this.parent?.(),
      wrappingInputRule({
        find: multilineInputRegex,
        type: this.type,
        getAttributes: () => ({ multiline: true })
      })
    ];
  }
});
