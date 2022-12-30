import React, { useRef } from "react";
import { Editor } from "@tiptap/core";
import { useCallback } from "react";

import {
  Tooltip,
  BubbleMenu,
  Button,
  Divider,
  Space
} from "../../../components";
import { useAttributes } from "../../../hooks/use-attributes";
import { IconEdit, IconUnlink, IconVisitlink } from "../../../icons";
import { Link as LinkExtension } from "../link";
import { showLinkEditor } from "./edit";
import i18n from "../../../i18n";

interface IProps {
  editor: Editor;
}

export const LinkBubbleMenu: React.FC<IProps> = ({ editor }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { href, target } = useAttributes(editor, LinkExtension.name, {
    href: "",
    target: ""
  });

  const shouldShow = useCallback(() => editor.isActive(LinkExtension.name), [
    editor
  ]);

  const visitLink = useCallback(() => {
    const tab = window.open();
    if (!tab) return;
    tab.opener = null;
    tab.location = href;
  }, [href, target]);

  const openEditLinkModal = useCallback(() => {
    showLinkEditor(editor, containerRef.current as HTMLElement);
  }, [editor]);

  const unsetLink = useCallback(
    () =>
      editor
        .chain()
        .extendMarkRange(LinkExtension.name)
        .unsetLink()
        .run(),
    [editor]
  );

  return (
    <BubbleMenu editor={editor} shouldShow={shouldShow}>
      <div ref={containerRef}>
        <Space spacing={4}>
          <Tooltip editor={editor} title={i18n('link', 'visit')}>
            <Button size="small" icon={<IconVisitlink />} onClick={visitLink} />
          </Tooltip>

          <Tooltip editor={editor} title={i18n('link', 'edit')}>
            <Button
              size="small"
              icon={<IconEdit />}
              onClick={openEditLinkModal}
            />
          </Tooltip>

          <Divider />

          <Tooltip editor={editor} title={i18n('link', 'remove')}>
            <Button onClick={unsetLink} icon={<IconUnlink />} size="small" />
          </Tooltip>
        </Space>
      </div>
    </BubbleMenu>
  );
};
