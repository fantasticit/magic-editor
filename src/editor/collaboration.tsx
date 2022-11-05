import React, { forwardRef, useMemo } from "react";
import { Editor } from "@tiptap/core";
import { HocuspocusProvider } from "@hocuspocus/provider";

import { Collaboration } from "../extensions/collaboration";
import { CollaborationCursor } from "../extensions/collaboration-cursor";

import { EditorRender, EditorRenderProps } from "./render";

import { getUserColor } from "./utilities";

export interface CollaborationEditorProps extends EditorRenderProps {
  id: string;
  url: string;
  token: string;
}

export const CollaborationEditor = forwardRef<
  Editor | null,
  React.PropsWithChildren<CollaborationEditorProps>
>((props, ref) => {
  const { id, url, token, extensions, userProvider, ...restProps } = props;

  const hocuspocusProvider = useMemo(() => {
    return new HocuspocusProvider({
      url,
      name: id,
      token,
      maxAttempts: 1
    } as any);
  }, [id, url, token]);

  const currentUser = useMemo(() => {
    return userProvider.getCurrentUser() ?? {};
  }, [userProvider]);

  if (!hocuspocusProvider) return <div>loading</div>;

  return (
    <EditorRender
      ref={ref}
      extensions={[
        ...extensions,
        Collaboration.configure({
          document: hocuspocusProvider.document
        }),
        CollaborationCursor.configure({
          provider: hocuspocusProvider,
          user: {
            ...currentUser,
            color: getUserColor()
          }
        })
      ]}
      userProvider={userProvider}
      {...restProps}
    />
  );
});

CollaborationEditor.displayName = "CollaborationEditor";
