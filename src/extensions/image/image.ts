import { mergeAttributes, Node, nodeInputRule } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { ImageView } from "./image-view";

export const inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    // @ts-ignore
    image: {
      setImage: (options: {
        src: string;
        width?: number;
        height?: number;
      }) => ReturnType;
    };
  }
}

export const Image = Node.create({
  name: "image",
  inline: false,
  content: "",
  marks: "",
  group: "block",
  selectable: true,
  draggable: false,
  atom: true,

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {}
    };
  },

  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: "100%"
      },
      height: {
        default: "auto"
      },
      aspectRatio: {
        default: 1
      },
      align: {
        default: "left"
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "img[src]"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addCommands() {
    return {
      setImage: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: match => {
          const [, , alt, src, title] = match;

          return { src, alt, title };
        }
      })
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageView);
  }
});
