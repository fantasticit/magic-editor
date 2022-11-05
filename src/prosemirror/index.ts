import { Node } from "prosemirror-model";

export {
  Plugin as PMPlugin,
  PluginKey as PMPluginKey,
  Selection,
  NodeSelection,
  TextSelection,
  Transaction,
  EditorState
} from "prosemirror-state";

export {
  Node as PMNode,
  Mark as PMMark,
  Slice,
  Fragment,
  ResolvedPos
} from "prosemirror-model";

export {
  EditorView,
  DecorationSet,
  Decoration,
  DecorationAttrs,
  // @ts-ignore
  __serializeForClipboard
} from "prosemirror-view";

export * from "./prosemirror-utils";

export type NodeWithPos = { pos: number; node: Node };
