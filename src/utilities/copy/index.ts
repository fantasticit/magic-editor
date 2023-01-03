import { Editor } from "@tiptap/core";

import { Toast } from "../../components";
import {
  Fragment,
  PMNode,
  Slice,
  __serializeForClipboard
} from "../../prosemirror";
import i18n from "../../i18n";

const _copy = require("./copy-to-clipboard");

export function copy(text: string | { text: string; format: string }[]) {
  return _copy(text, () => Toast.success(i18n('copyDone')));
}

export const copyNode = (editor: Editor, extensionName: string) => {
  let targetNode: PMNode | null = null;

  const { state } = editor;
  const $pos = state.selection.$anchor;
  // @ts-ignore
  const currentNode = state.selection.node;

  if (currentNode && currentNode.type.name === extensionName) {
    targetNode = currentNode;
  } else {
    if ($pos.depth) {
      for (let d = $pos.depth; d > 0; d--) {
        const node = $pos.node(d);
        if (node.type.name === extensionName) {
          targetNode = node;
        }
      }
    }
  }

  if (targetNode) {
    const slice = new Slice(Fragment.fromArray([targetNode]), 0, 0);
    const { dom, text } = __serializeForClipboard(editor.view, slice);

    const data = [{ format: "text/html", text: dom.innerHTML }];

    if (text) {
      data.push({ format: "text/plain", text });
    }

    copy(data);
  }
};

export const deleteNode = (editor: Editor, extensionName: string) => {
  const { state } = editor;
  const $pos = state.selection.$anchor;
  let done = false;

  if ($pos.depth) {
    for (let d = $pos.depth; d > 0; d--) {
      const node = $pos.node(d);
      if (node.type.name === extensionName) {
        // @ts-ignore
        if (editor.dispatchTransaction)
          // @ts-ignore
          editor.dispatchTransaction(
            state.tr.delete($pos.before(d), $pos.after(d)).scrollIntoView()
          );
        done = true;
      }
    }
  } else {
    // @ts-ignore
    const node = state.selection.node;
    if (node && node.type.name === extensionName) {
      editor
        .chain()
        .deleteSelection()
        .run();
      done = true;
    }
  }

  if (!done) {
    const pos = $pos.pos;

    if (pos) {
      const node = state.tr.doc.nodeAt(pos);

      if (node && node.type.name === extensionName) {
        // @ts-ignore
        if (editor.dispatchTransaction)
          // @ts-ignore
          editor.dispatchTransaction(state.tr.delete(pos, pos + node.nodeSize));
        done = true;
      }
    }
  }

  return done;
};
