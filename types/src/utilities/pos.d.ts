import { EditorState } from "prosemirror-state";
/**
 * 根据文档内容大小获取不越界的位置
 * @param state
 * @param pos
 * @returns
 */
export declare function safePos(state: EditorState, pos: number): number;
