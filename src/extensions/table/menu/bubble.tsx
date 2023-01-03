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
import i18n from "../../../i18n";

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
        <Tooltip editor={editor} title={i18n('copy')}>
          <Button onClick={copyMe} icon={<IconCopy />} size="small" />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title={i18n('table', 'insertColumnLeft')}>
          <Button
            onClick={addColumnBefore}
            icon={<IconAddColumnBefore />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('table', 'insertColumnRight')}>
          <Button
            onClick={addColumnAfter}
            icon={<IconAddColumnAfter />}
            size="small"
          />
        </Tooltip>
        <Tooltip editor={editor} title={i18n('table', 'removeColumns')}>
          <Button
            onClick={deleteColumn}
            icon={<IconDeleteColumn />}
            size="small"
          />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title={i18n('table', 'insertRowUp')}>
          <Button
            onClick={addRowBefore}
            icon={<IconAddRowBefore />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('table', 'insertRowDown')}>
          <Button
            onClick={addRowAfter}
            icon={<IconAddRowAfter />}
            size="small"
          />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('table', 'removeRows')}>
          <Button onClick={deleteRow} icon={<IconDeleteRow />} size="small" />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title={i18n('table', 'toggleHeaderColumn')}>
          <Button
            size="small"
            icon={<IconTableHeaderColumn />}
            onClick={toggleHeaderColumn}
          />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('table', 'toggleHeaderRow')}>
          <Button
            size="small"
            icon={<IconTableHeaderRow />}
            onClick={toggleHeaderRow}
          />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('table', 'toggleHeaderCell')}>
          <Button
            size="small"
            icon={<IconTableHeaderCell />}
            onClick={toggleHeaderCell}
          />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title={i18n('table', 'merge')}>
          <Button size="small" icon={<IconMergeCell />} onClick={mergeCells} />
        </Tooltip>

        <Tooltip editor={editor} title={i18n('table', 'split')}>
          <Button size="small" icon={<IconSplitCell />} onClick={splitCell} />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title={i18n('table', 'remove')}>
          <Button size="small" icon={<IconDeleteTable />} onClick={deleteMe} />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
