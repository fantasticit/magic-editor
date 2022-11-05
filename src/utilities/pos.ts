import { EditorState } from "prosemirror-state";

/**
 * 根据文档内容大小获取不越界的位置
 * @param state
 * @param pos
 * @returns
 */
export function safePos(state: EditorState, pos: number) {
  const max = Math.max(pos, 0);
  const min = Math.min(state.doc.content.size, max);
  return min;
}
