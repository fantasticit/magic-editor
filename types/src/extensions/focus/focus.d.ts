import { Extension } from "@tiptap/core";
export interface FocusOptions {
    className: string;
    mode: "all" | "deepest" | "shallowest";
}
export declare const Focus: Extension<FocusOptions, any>;
