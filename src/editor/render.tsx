import React, { forwardRef, useImperativeHandle } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { ThemeProvider } from "styled-components";

import { StyledEditor } from "../styles/editor";

import { resolveEditorKit, EditorKit } from "./kit";
import { EditorProvider } from "./provider";
import { Content, Editor } from "@tiptap/core";
import light from "../styles/theme";

export interface EditorRenderProps extends EditorProvider, EditorKit {
  content?: Content;
}

export const EditorRender = forwardRef<
  Editor | null,
  React.PropsWithChildren<EditorRenderProps>
>((props, ref) => {
  const {
    schema,
    content,
    extensions,
    userProvider,
    fileProvider,
    children
  } = props;

  const editorProvider: EditorProvider = {
    userProvider,
    fileProvider
  };

  const editor = useEditor(
    {
      content,
      extensions: resolveEditorKit({ schema, extensions }),
      editorProps: {
        attributes: {
          class: "magic-editor",
          spellcheck: "false",
          suppressContentEditableWarning: "true"
        },
        // @ts-ignore
        editorProvider,
        theme: light
      },
      onCreate(props) {
        props.editor.view.focus();
      },
      onUpdate(props) {
        // console.log(props.editor.getHTML());
      }
    },
    []
  );

  useImperativeHandle(ref, () => editor as Editor);

  return (
    <ThemeProvider theme={light}>
      <div>{children}</div>
      <StyledEditor>
        <EditorContent editor={editor} />
      </StyledEditor>
    </ThemeProvider>
  );
});

EditorRender.displayName = "EditorRender";
