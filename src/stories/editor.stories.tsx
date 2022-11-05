import React, { useState } from "react";
import { Editor } from "@tiptap/core";

import { EditorRender } from "../index";

import { Bold, BoldStaticMenu } from "../extensions/bold";
import { Italic, ItalicStaticMenu } from "../extensions/italic";
import { Underline, UnderlineStaticMenu } from "../extensions/underline";
import { Strike, StrikeStaticMenu } from "../extensions/strike";
import { Subscript, SubscriptStaticMenu } from "../extensions/subscript";
import { Superscript, SuperscriptStaticMenu } from "../extensions/superscript";

import { Blockquote, BlockquoteStaticMenu } from "../extensions/blockquote";

import { CodeExtensions, CodeStaticMenu } from "../extensions/code";
import { CodeBlock, CodeBlockStaticMenu } from "../extensions/code-block";

import { Heading, HeadingStaticMenu } from "../extensions/heading";

import { Link, LinkStaticMenu, LinkBubbleMenu } from "../extensions/link";

import {
  Iframe,
  IframeStaticMenu,
  IframeBubbleMenu
} from "../extensions/iframe";

import { Image, ImageStaticMenu, ImageBubbleMenu } from "../extensions/image";
import { Status, StatusStaticMenu } from "../extensions/status";
import {
  TableExtensions,
  TableStaticMenu,
  TableBubbleMenu
} from "../extensions/table";

import { Mind, MindStaticMenu, MindBubbleMenu } from "../extensions/mind";

import { Flow, FlowStaticMenu, FlowBubbleMenu } from "../extensions/flow";

import {
  Excalidraw,
  ExcalidrawStaticMenu,
  ExcalidrawBubbleMenu
} from "../extensions/excalidraw";

import { TextAlign, TextAlignStaticMenu } from "../extensions/text-align";

import {
  HorizontalRule,
  HorizontalRuleStaticMenu
} from "../extensions/horizontal-rule";

import { ListItem } from "../extensions/list-item";
import { OrderedList } from "../extensions/ordered-list";
import { BulletList } from "../extensions/bullet-list";

import { DropCursor } from "../extensions/dropcursor";
import { GapCursor } from "../extensions/gapcursor";
import { HardBreak } from "../extensions/hard-break";

import { UniqueID } from "../extensions/unique-id";
import { Dragable } from "../extensions/dragable";

import { Mention } from "../extensions/mention";

import { Slash } from "../extensions/slash";

import {
  ColumnsExtensions,
  ColumnsStaticMenu,
  ColumnsBubbleMenu
} from "../extensions/columns";

import { FullContent } from "./content";

import {
  IconHeading1,
  IconHeading2,
  IconHeading3,
  IconHeading4,
  IconCodeBlock,
  IconTable,
  IconCode
} from "../icons";

import { Placeholder } from "../extensions/placeholder";

const meta = {
  title: "Editor"
};
export default meta;

function readImage(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file.type && !file.type.startsWith("image/")) {
      console.log("File is not an image.", file.type, file);
      reject();
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", event => {
      resolve(event.target?.result as string);
    });
    reader.readAsDataURL(file);
  });
}

const currentUser = { id: "mock-user", name: "mock", avatar: "" };

const userProvider = {
  getCurrentUser() {
    return currentUser;
  },
  getUsers(): any {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          Array.from({ length: 20 }, (_, index) => {
            return {
              id: index++,
              name: `用户编号-${index + 1}`,
              avatar:
                "https://avatars.githubusercontent.com/u/26452939?s=40&v=4"
            };
          })
        );
      }, 3000 * Math.random());
    });
  }
};
const fileProvider = {
  uploadFile(file) {
    return readImage(file);
  }
};

const Commands = [
  {
    divider: true,
    title: "标题"
  },
  {
    icon: <IconHeading1 />,
    text: "标题一",
    slash: "/h1",
    action: editor =>
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 1 })
        .run()
  },

  {
    icon: <IconHeading2 />,
    text: "标题二",
    slash: "/h2",
    action: editor =>
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 2 })
        .run()
  },

  {
    icon: <IconHeading3 />,
    text: "标题三",
    slash: "/h3",
    action: editor =>
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 3 })
        .run()
  },

  {
    icon: <IconHeading4 />,
    text: "标题四",
    slash: "/h4",
    action: editor =>
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 4 })
        .run()
  },

  {
    divider: true,
    title: "插入"
  },

  {
    icon: <IconCodeBlock />,
    text: "代码块",
    slash: "/codeBlock",
    action: editor =>
      editor
        .chain()
        .focus()
        .toggleCodeBlock()
        .run()
  },

  {
    icon: <IconTable />,
    text: "表格",
    slash: "/table",
    action: editor =>
      editor
        .chain()
        .insertTable({ rows: 3, cols: 4, withHeaderRow: true })
        .focus()
        .run()
  }
];

const FullExtensions = [
  UniqueID,
  Dragable,

  Bold,
  Italic,
  Underline,
  Strike,
  Subscript,
  Superscript,
  Blockquote,
  CodeExtensions,
  CodeBlock,
  Heading,
  HorizontalRule,
  Link,
  Iframe,
  Image,
  Status,
  TableExtensions,
  TextAlign,
  ListItem,
  OrderedList,
  BulletList,
  DropCursor,
  GapCursor,
  HardBreak,
  Excalidraw,
  Mind,
  Flow,

  Slash.configure({
    pluginKey: "slash-/",
    items: Commands as any
  }),

  Slash.configure({
    char: "、",
    pluginKey: "slash-、",
    items: Commands as any
  }),

  Slash.configure({
    char: "\\",
    pluginKey: "slash-\\",
    items: Commands as any
  }),

  Placeholder.configure({
    placeholder: "输入 、 唤起菜单",
    showOnlyCurrent: false,
    showOnlyWhenEditable: false
  }),

  Mention,
  ColumnsExtensions
];

export const Full = () => {
  const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <div>
      <EditorRender
        ref={setEditor}
        schema="block+"
        content={FullContent}
        extensions={FullExtensions}
        userProvider={userProvider}
        fileProvider={fileProvider}>
        <div>
          {editor && (
            <>
              <HeadingStaticMenu editor={editor} />
              <BoldStaticMenu editor={editor} />
              <ItalicStaticMenu editor={editor} />
              <UnderlineStaticMenu editor={editor} />
              <StrikeStaticMenu editor={editor} />
              <BlockquoteStaticMenu editor={editor} />
              <CodeStaticMenu editor={editor} />
              <CodeBlockStaticMenu editor={editor} />
              <SubscriptStaticMenu editor={editor} />
              <SuperscriptStaticMenu editor={editor} />

              <TextAlignStaticMenu editor={editor} />

              <LinkStaticMenu editor={editor} />
              <LinkBubbleMenu editor={editor} />

              <IframeStaticMenu editor={editor} />
              <IframeBubbleMenu editor={editor} />

              <MindStaticMenu editor={editor} />
              <MindBubbleMenu editor={editor} />

              <FlowStaticMenu editor={editor} />
              <FlowBubbleMenu editor={editor} />

              <ExcalidrawStaticMenu editor={editor} />
              <ExcalidrawBubbleMenu editor={editor} />

              <HorizontalRuleStaticMenu editor={editor} />

              <ImageStaticMenu editor={editor} />
              <ImageBubbleMenu editor={editor} />

              <StatusStaticMenu editor={editor} />

              <TableStaticMenu editor={editor} />
              <TableBubbleMenu editor={editor} />

              <ColumnsStaticMenu editor={editor} />
              <ColumnsBubbleMenu editor={editor} />
            </>
          )}
        </div>
      </EditorRender>
    </div>
  );
};
