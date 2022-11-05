import { Editor } from "@tiptap/core";

export interface User {
  id: string | number;
  name: string;
  avatar: string;
  [key: string]: unknown;
}

export interface EditorProvider {
  /**
   * 用户信息
   */
  userProvider: {
    /**
     * 获取当前用户
     */
    getCurrentUser: () => User;

    /**
     * 获取用户列表
     */
    getUsers: (query: string) => Promise<User[]> | User[];
  };
  /**
   * 文件上传
   */
  fileProvider: {
    uploadFile: (file: Blob) => Promise<string>;
  };
}

export const getEditorProvider = (editor: Editor): EditorProvider => {
  // @ts-ignore
  return editor.options.editorProps.editorProvider;
};
