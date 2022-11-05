import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { STATUS_COLORS, StatusView } from "./status-view";

type IStatusAttrs = {
  createUserId?: string | number;
  showPickerOnCreate?: boolean;
  color?: string;
  text?: string;
};

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    status: {
      setStatus: (arg: IStatusAttrs) => ReturnType;
    };
  }
}

export const Status = Node.create({
  name: "status",
  group: "inline",
  inline: true,
  selectable: true,
  atom: true,

  addAttributes() {
    return {
      createUserId: {
        default: null
      },
      showPickerOnCreate: {
        default: false
      },
      color: {
        default: STATUS_COLORS[0][1]
      },
      bgcolor: {
        default: STATUS_COLORS[0][2]
      },
      borderColor: {
        default: STATUS_COLORS[0][3]
      },
      text: {
        default: ""
      }
    };
  },

  addOptions() {
    return {
      HTMLAttributes: {
        class: "status"
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "span.status"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addCommands() {
    return {
      setStatus: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      }
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(StatusView);
  }
});
