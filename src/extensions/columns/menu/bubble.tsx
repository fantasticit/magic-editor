import React, { useCallback } from "react";
import { Editor, posToDOMRect } from "@tiptap/core";
import { Node as PMNode } from "prosemirror-model";

import { findParentNode } from "../../../prosemirror";

import {
  IconCopy,
  IconAddColumnBefore,
  IconAddColumnAfter,
  IconDeleteColumn,
  IconDelete
} from "../../../icons";
import {
  BubbleMenu,
  BubbleMenuProps,
  Button,
  Divider,
  Space,
  Tooltip
} from "../../../components";
import { copyNode, deleteNode } from "../../../utilities";

import { Columns } from "../columns";

export const ColumnsBubbleMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const shouldShow = useCallback<BubbleMenuProps["shouldShow"]>(() => {
    return editor.isActive(Columns.name);
  }, [editor]);

  const getReferenceClientRect = useCallback(() => {
    const { selection } = editor.state;
    const predicate = (node: PMNode) => node.type.name === Columns.name;
    const parent = findParentNode(predicate)(selection);

    if (parent) {
      const dom = editor.view.nodeDOM(parent?.pos) as HTMLElement;
      return dom.getBoundingClientRect();
    }

    return posToDOMRect(editor.view, selection.from, selection.to);
  }, [editor]);

  const copyMe = useCallback(() => {
    copyNode(editor, Columns.name);
  }, [editor]);

  const deleteMe = useCallback(() => {
    deleteNode(editor, Columns.name);
  }, [editor]);

  const addColBefore = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .addColBefore()
        .run(),
    [editor]
  );

  const addColAfter = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .addColAfter()
        .run(),
    [editor]
  );

  const deleteCol = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .deleteCol()
        .run(),
    [editor]
  );

  return (
    <BubbleMenu
      className={"bubble-menu bubble-columns-table"}
      editor={editor}
      pluginKey="columns-bubble-menu"
      shouldShow={shouldShow}
      tippyOptions={{ getReferenceClientRect }}>
      <Space spacing={2}>
        <Tooltip editor={editor} title="复制">
          <Button onClick={copyMe} icon={<IconCopy />} size="small" />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="向前插入一列">
          <Button
            onClick={addColBefore}
            icon={<IconAddColumnBefore />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title="向后插入一列">
          <Button
            onClick={addColAfter}
            icon={<IconAddColumnAfter />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title="删除当前列">
          <Button
            onClick={deleteCol}
            icon={<IconDeleteColumn />}
            size="small"
          />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="删除">
          <Button size="small" icon={<IconDelete />} onClick={deleteMe} />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
