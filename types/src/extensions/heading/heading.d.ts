export declare type Level = 1 | 2 | 3 | 4 | 5 | 6;
export interface HeadingOptions {
    levels: Level[];
    HTMLAttributes: Record<string, any>;
    offset: number;
}
export declare const Heading: import("@tiptap/core").Node<HeadingOptions, any>;
