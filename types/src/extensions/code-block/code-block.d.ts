import { CodeBlockOptions } from "@tiptap/extension-code-block";
interface CodeBlockLowlightOptions extends CodeBlockOptions {
    lowlight: any;
    defaultLanguage: string | null | undefined;
}
export declare const CodeBlock: import("@tiptap/react").Node<CodeBlockLowlightOptions, any>;
export {};
