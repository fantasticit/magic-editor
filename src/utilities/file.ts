import { fileOpen } from "browser-fs-access";
import { Editor } from "@tiptap/core";

import { getEditorProvider } from "../editor/provider";
import { findLoadingById, Loading } from "../extensions/loading";

function getImageNaturalSize(
  url: string
): Promise<{ width: number; height: number; aspectRatio: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      });
    };
    img.onerror = function(err) {
      reject(err);
    };
    img.src = url;
  });
}

let loadingId = 0;

export async function uploadImage(
  editor: Editor
): Promise<{ url: string; width: number; height: number }> {
  const blob = await fileOpen({
    mimeTypes: ["image/*"]
  });
  const editorProvider = getEditorProvider(editor);

  const id = `loading-${loadingId++}`;
  const loadingNode = editor.state.schema?.nodes?.[Loading.name]?.create({
    id,
    text: blob.name
  });

  const removeLoading = () => {
    const maybeLoading = findLoadingById(editor, id);
    if (maybeLoading) {
      editor.commands.deleteRange({
        from: maybeLoading?.pos,
        to: maybeLoading?.pos + maybeLoading?.node.nodeSize
      });
    }
  };

  editor.view.dispatch(editor.view.state.tr.replaceSelectionWith(loadingNode));

  try {
    const url = await editorProvider.fileProvider.uploadFile(blob);
    const size = await getImageNaturalSize(url);
    removeLoading();
    return { url, ...size };
  } catch (e) {
    removeLoading();
    throw e;
  }
}
