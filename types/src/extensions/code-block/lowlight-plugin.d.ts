import { Plugin } from "prosemirror-state";
export declare function LowlightPlugin({ name, lowlight, defaultLanguage }: {
    name: string;
    lowlight: any;
    defaultLanguage: string | null | undefined;
}): Plugin<any>;
