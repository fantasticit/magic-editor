import React, { useRef } from "react";
import { Editor } from "@tiptap/core";
import { useCallback } from "react";

import { Tooltip, BubbleMenu, Button, Space } from "../../../components";
import { useAttributes } from "../../../hooks/use-attributes";
import { IconEdit, IconVisitlink } from "../../../icons";
import { Iframe as IframeExtension } from "../iframe";

import { showURLEditor } from "./edit";
import i18n from "../../../i18n";

interface IProps {
  editor: Editor;
}

export const IframeBubbleMenu: React.FC<IProps> = ({ editor }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { url } = useAttributes(editor, IframeExtension.name, {
    url: ""
  });

  const shouldShow = useCallback(() => editor.isActive(IframeExtension.name), [
    editor
  ]);

  const visitLink = useCallback(() => {
    const tab = window.open();
    if (!tab) return;
    tab.opener = null;
    tab.location = url;
  }, [url]);

  const openEditLinkModal = useCallback(() => {
    showURLEditor(editor, containerRef.current as HTMLElement);
  }, [editor]);

  return (
    <BubbleMenu editor={editor} shouldShow={shouldShow} forNode>
      <div ref={containerRef}>
        <Space spacing={4}>
          <Tooltip editor={editor} title={i18n('iframe', 'visit')}>
            <Button size="small" icon={<IconVisitlink />} onClick={visitLink} />
          </Tooltip>

          <Tooltip editor={editor} title={i18n('iframe', 'edit')}>
            <Button
              size="small"
              icon={<IconEdit />}
              onClick={openEditLinkModal}
            />
          </Tooltip>
        </Space>
      </div>
    </BubbleMenu>
  );
};
