import { Editor } from "@tiptap/core";
import { EditorState, Plugin, PluginKey } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Instance, Props } from "tippy.js";
export interface BubbleMenuPluginProps {
    pluginKey: PluginKey | string;
    editor: Editor;
    element: HTMLElement;
    tippyOptions?: Partial<Props>;
    shouldShow?: ((props: {
        editor: Editor;
        view: EditorView;
        state: EditorState;
        oldState?: EditorState;
        from: number;
        to: number;
    }) => boolean) | null;
}
export declare type BubbleMenuViewProps = BubbleMenuPluginProps & {
    view: EditorView;
};
export declare class BubbleMenuView {
    editor: Editor;
    element: HTMLElement;
    view: EditorView;
    preventHide: boolean;
    tippy: Instance | undefined;
    tippyOptions?: Partial<Props>;
    shouldShow: Exclude<BubbleMenuPluginProps["shouldShow"], null>;
    constructor({ editor, element, view, tippyOptions, shouldShow }: BubbleMenuViewProps);
    mousedownHandler: () => void;
    dragstartHandler: () => void;
    focusHandler: () => void;
    blurHandler: ({ event }: {
        event: FocusEvent;
    }) => void;
    updateHandler: (view: EditorView, oldState?: EditorState | undefined) => void;
    createTooltip(): void;
    update(view: EditorView, oldState?: EditorState): void;
    show(): void;
    hide(): void;
    destroy(): void;
}
export declare const BubbleMenuPlugin: (options: BubbleMenuPluginProps) => Plugin<any>;
