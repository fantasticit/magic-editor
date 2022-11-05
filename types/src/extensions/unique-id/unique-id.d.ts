import { Extension } from "@tiptap/core";
import { Transaction } from "../../prosemirror";
export interface UniqueIDOptions {
    attributeName: string;
    types: string[];
    generateID: () => any;
    filterTransaction: ((transaction: Transaction) => boolean) | null;
}
export declare const UniqueID: Extension<UniqueIDOptions, any>;
