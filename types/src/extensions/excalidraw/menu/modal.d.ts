import React from "react";
import { Editor } from "@tiptap/core";
declare type IProps = {
    editor: Editor;
    data: {
        elements: unknown[];
        appState: {
            isLoading: false;
        };
        files: null;
    } | null;
    onClose: () => void;
};
export declare const ExcalidrawSettingModal: React.FC<IProps>;
export {};
