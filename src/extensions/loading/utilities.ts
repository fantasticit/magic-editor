import { Editor } from "@tiptap/core";

import { PMNode } from "../../prosemirror";

export function findLoadingById(
  editor: Editor,
  id: string
): null | { node: PMNode; pos: number } {
  let target: PMNode | null = null;
  let pos = -1;

  editor.state.doc.descendants((node, nodePos) => {
    if (node.type.name === "loading" && node.attrs.id === id) {
      target = node;
      pos = nodePos;
    }
  });

  return target ? { node: target, pos } : null;
}
