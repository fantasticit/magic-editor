import { AnyExtension, Node } from "@tiptap/core";

import { Focus } from "../extensions/focus";
import { Loading } from "../extensions/loading";
import { Paragraph } from "../extensions/paragraph";
import { Text } from "../extensions/text";
import { HardBreak } from "../extensions/hard-break";
import { TrailingNode } from "../extensions/trailing-node";

export interface EditorKit {
  schema: string;
  extensions: Array<AnyExtension | AnyExtension[]>;
}

export const resolveEditorKit = (props: EditorKit) => {
  const { schema, extensions } = props;

  const Doc = Node.create({
    name: "doc",
    topNode: true,
    content: schema
  });

  const runtimeExtensions = [
    Doc,
    Paragraph,
    Text,
    HardBreak,
    Focus,
    Loading,
    TrailingNode,
    ...extensions.flat()
  ];

  return runtimeExtensions;
};
