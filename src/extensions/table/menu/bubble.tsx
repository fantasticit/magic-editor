import React, { useCallback } from "react";
import { Editor, posToDOMRect } from "@tiptap/core";
import { Node as PMNode } from "prosemirror-model";

import { findParentNode } from "../../../prosemirror";
import {
  IconCopy,
  IconAddColumnBefore,
  IconAddColumnAfter,
  IconDeleteColumn,
  IconAddRowAfter,
  IconAddRowBefore,
  IconDeleteRow,
  IconTableHeaderColumn,
  IconTableHeaderRow,
  IconTableHeaderCell,
  IconMergeCell,
  IconSplitCell,
  IconDeleteTable
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

import { Table } from "../table";

export const TableBubbleMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const shouldShow = useCallback<BubbleMenuProps["shouldShow"]>(() => {
    return editor.isActive(Table.name);
  }, [editor]);

  const getReferenceClientRect = useCallback(() => {
    const { selection } = editor.state;
    const predicate = (node: PMNode) => node.type.name === Table.name;
    const parent = findParentNode(predicate)(selection);

    if (parent) {
      const dom = editor.view.nodeDOM(parent?.pos) as HTMLElement;
      return dom.getBoundingClientRect();
    }

    return posToDOMRect(editor.view, selection.from, selection.to);
  }, [editor]);

  const copyMe = useCallback(() => {
    copyNode(editor, Table.name);
  }, [editor]);

  const deleteMe = useCallback(() => {
    deleteNode(editor, Table.name);
  }, [editor]);

  const addColumnBefore = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .addColumnBefore()
        .run(),
    [editor]
  );
  const addColumnAfter = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .addColumnAfter()
        .run(),
    [editor]
  );
  const deleteColumn = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .deleteColumn()
        .run(),
    [editor]
  );
  const addRowBefore = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .addRowBefore()
        .run(),
    [editor]
  );
  const addRowAfter = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .addRowAfter()
        .run(),
    [editor]
  );
  const deleteRow = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .deleteRow()
        .run(),
    [editor]
  );
  const toggleHeaderColumn = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleHeaderColumn()
        .run(),
    [editor]
  );
  const toggleHeaderRow = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleHeaderRow()
        .run(),
    [editor]
  );
  const toggleHeaderCell = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .toggleHeaderCell()
        .run(),
    [editor]
  );
  const mergeCells = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .mergeCells()
        .run(),
    [editor]
  );
  const splitCell = useCallback(
    () =>
      editor
        .chain()
        .focus()
        .splitCell()
        .run(),
    [editor]
  );

  return (
    <BubbleMenu
      className={"bubble-menu bubble-menu-table"}
      editor={editor}
      pluginKey="table-bubble-menu"
      shouldShow={shouldShow}
      tippyOptions={{ getReferenceClientRect, offset: [0, -2] }}>
      <Space spacing={2}>
        <Tooltip editor={editor} title="复制">
          <Button onClick={copyMe} icon={<IconCopy />} size="small" />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="向前插入一列">
          <Button
            onClick={addColumnBefore}
            icon={<IconAddColumnBefore />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title="向后插入一列">
          <Button
            onClick={addColumnAfter}
            icon={<IconAddColumnAfter />}
            size="small"
          />
        </Tooltip>
        <Tooltip editor={editor} title="删除当前列">
          <Button
            onClick={deleteColumn}
            icon={<IconDeleteColumn />}
            size="small"
          />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="向前插入一行">
          <Button
            onClick={addRowBefore}
            icon={<IconAddRowBefore />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title="向后插入一行">
          <Button
            onClick={addRowAfter}
            icon={<IconAddRowAfter />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title="删除当前行">
          <Button onClick={deleteRow} icon={<IconDeleteRow />} size="small" />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="设置(或取消)当前列为表头">
          <Button
            size="small"
            icon={<IconTableHeaderColumn />}
            onClick={toggleHeaderColumn}
          />
        </Tooltip>

        <Tooltip editor={editor} title="设置(或取消)当前行为表头">
          <Button
            size="small"
            icon={<IconTableHeaderRow />}
            onClick={toggleHeaderRow}
          />
        </Tooltip>

        <Tooltip editor={editor} title="设置(或取消)当前单元格为表头">
          <Button
            size="small"
            icon={<IconTableHeaderCell />}
            onClick={toggleHeaderCell}
          />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="合并单元格">
          <Button size="small" icon={<IconMergeCell />} onClick={mergeCells} />
        </Tooltip>

        <Tooltip editor={editor} title="分离单元格">
          <Button size="small" icon={<IconSplitCell />} onClick={splitCell} />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="删除表格">
          <Button size="small" icon={<IconDeleteTable />} onClick={deleteMe} />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
