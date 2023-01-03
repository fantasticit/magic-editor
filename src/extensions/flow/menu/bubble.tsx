import React, { useCallback } from "react";

import { IconCopy, IconDelete, IconEdit } from "../../../icons";
import {
  BubbleMenu,
  Tooltip,
  Divider,
  Button,
  Space
} from "../../../components";
import { useAttributes } from "../../../hooks";
import { copyNode, deleteNode } from "../../../utilities";
import { IFlowAttrs, Flow } from "../flow";

import { showFlowEditor } from "./edit";
import i18n from "../../../i18n";

export const FlowBubbleMenu = ({ editor }) => {
  const attrs = useAttributes<IFlowAttrs>(editor, Flow.name, {
    width: 0,
    height: 0,
    svg: ""
  });

  const shouldShow = useCallback(() => editor.isActive(Flow.name), [editor]);

  const copyMe = useCallback(() => copyNode(editor, Flow.name), [editor]);

  const deleteMe = useCallback(() => deleteNode(editor, Flow.name), [editor]);

  const openEditModal = useCallback(() => {
    showFlowEditor(editor);
  }, [editor]);

  return (
    <BubbleMenu
      className={"bubble-menu"}
      editor={editor}
      pluginKey="mind-bubble-menu"
      shouldShow={shouldShow}
      forNode>
      <Space spacing={4}>
        <Tooltip editor={editor} title={i18n('copy')}>
          <Button onClick={copyMe} icon={<IconCopy />} size="small" />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('edit')}>
          <Button size="small" icon={<IconEdit />} onClick={openEditModal} />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title={i18n('delete')}>
          <Button onClick={deleteMe} icon={<IconDelete />} size="small" />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
