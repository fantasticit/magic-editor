import { Editor } from "@tiptap/core";
export declare function uploadImage(editor: Editor): Promise<{
    url: string;
    width: number;
    height: number;
}>;
