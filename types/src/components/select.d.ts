import React from "react";
import { SelectProps as ReactSelectProps } from "@douyinfe/semi-ui/lib/es/select";
import { Editor } from "@tiptap/core";
interface SelectProps extends ReactSelectProps {
    editor: Editor;
    options: Array<{
        label: React.ReactNode;
        value: unknown;
    }>;
}
export declare function Select(props: React.PropsWithChildren<SelectProps>): JSX.Element;
export {};
