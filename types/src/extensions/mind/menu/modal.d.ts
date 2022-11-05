import React from "react";
import { Editor } from "@tiptap/core";
declare type IProps = {
    editor: Editor;
    data: string;
    onClose: () => void;
};
export declare const MindSettingModal: React.FC<IProps>;
export {};
