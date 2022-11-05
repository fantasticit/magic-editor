import { fileOpen } from "browser-fs-access";
import { Editor } from "@tiptap/core";

import { getEditorProvider } from "../editor/provider";

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

export async function uploadImage(
  editor: Editor
): Promise<{ url: string; width: number; height: number }> {
  const blob = await fileOpen({
    mimeTypes: ["image/*"]
  });
  const editorProvider = getEditorProvider(editor);
  const url = await editorProvider.fileProvider.uploadFile(blob);
  const size = await getImageNaturalSize(url);

  return { url, ...size };
}
