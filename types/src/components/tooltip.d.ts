import React from "react";
import { Editor } from "@tiptap/core";
import { Placement } from "tippy.js";
declare type ZLevel = "default" | "middle" | "highest";
export declare const Tooltip: React.FC<React.PropsWithChildren<{
    editor: Editor;
    title: string;
    zLevel?: ZLevel;
    placement?: Placement;
}>>;
export {};
