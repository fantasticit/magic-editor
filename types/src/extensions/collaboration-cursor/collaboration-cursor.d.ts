import { Extension } from "@tiptap/core";
declare type CollaborationCursorStorage = {
    users: {
        clientId: number;
        [key: string]: any;
    }[];
};
export interface CollaborationCursorOptions {
    provider: any;
    user: Record<string, any>;
    render(user: Record<string, any>): HTMLElement;
    /**
     * @deprecated The "onUpdate" option is deprecated. Please use `editor.storage.collaborationCursor.users` instead. Read more: https://tiptap.dev/api/extensions/collaboration-cursor
     */
    onUpdate: (users: {
        clientId: number;
        [key: string]: any;
    }[]) => null;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        collaborationCursor: {
            /**
             * Update details of the current user
             */
            updateUser: (attributes: Record<string, any>) => ReturnType;
            /**
             * Update details of the current user
             *
             * @deprecated The "user" command is deprecated. Please use "updateUser" instead. Read more: https://tiptap.dev/api/extensions/collaboration-cursor
             */
            user: (attributes: Record<string, any>) => ReturnType;
        };
    }
}
export declare const CollaborationCursor: Extension<CollaborationCursorOptions, CollaborationCursorStorage>;
export {};
