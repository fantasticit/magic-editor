import { Editor } from "@tiptap/core";
export declare function useAttributes<T extends object, R = T>(editor: Editor, attribute: string, defaultValue?: T, map?: (arg: T) => R): R;
