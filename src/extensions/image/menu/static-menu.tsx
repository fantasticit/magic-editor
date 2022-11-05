import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";

import { Tooltip, Button } from "../../../components";
import { IconImage } from "../../../icons";
import { useActive } from "../../../hooks/use-active";
import { uploadImage } from "../../../utilities";
import { Image as ImageExtension } from "../image";

export const ImageStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isCodeActive = useActive(editor, ImageExtension.name);

  const setImage = useCallback(() => {
    uploadImage(editor).then(res => {
      editor
        .chain()
        .focus()
        .setImage({
          ...res,
          src: res.url
        })
        .run();
    });
  }, [editor]);

  return (
    <Tooltip title="上传图片" editor={editor}>
      <Button icon={<IconImage />} onClick={setImage} active={isCodeActive} />
    </Tooltip>
  );
};
