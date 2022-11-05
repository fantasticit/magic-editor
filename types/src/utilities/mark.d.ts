import { EditorState } from "prosemirror-state";
import { Mark, MarkType } from "prosemirror-model";
export declare const isMarkActive: (type: MarkType) => (state: EditorState) => boolean;
export declare function findMarkPosition(state: EditorState, mark: Mark, from: number, to: number): {
    start: number;
    end: number;
};
