import {
  EditorView,
  Transaction,
  ResolvedPos,
  PMNode
} from "../../prosemirror";

function dropPoint(doc, pos, slice) {
  const $pos = doc.resolve(pos);
  if (!slice.content.size) {
    return pos;
  }
  let content = slice.content;
  for (let i = 0; i < slice.openStart; i++) {
    content = content.firstChild.content;
  }
  for (
    let pass = 1;
    pass <= (slice.openStart == 0 && slice.size ? 2 : 1);
    pass++
  ) {
    for (let d = $pos.depth; d >= 0; d--) {
      const bias =
        d == $pos.depth
          ? 0
          : $pos.pos <= ($pos.start(d + 1) + $pos.end(d + 1)) / 2
          ? -1
          : 1;
      const insertPos = $pos.index(d) + (bias > 0 ? 1 : 0);
      const parent = $pos.node(d);
      let fits = false;
      if (pass == 1) {
        fits = parent.canReplace(insertPos, insertPos, content);
      } else {
        const wrapping = parent
          .contentMatchAt(insertPos)
          .findWrapping(content.firstChild.type);
        fits =
          wrapping && parent.canReplaceWith(insertPos, insertPos, wrapping[0]);
      }
      if (fits) {
        return bias == 0
          ? $pos.pos
          : bias < 0
          ? $pos.before(d + 1)
          : $pos.after(d + 1);
      }
    }
  }
  return null;
}

export const removePossibleTable = (
  view: EditorView,
  event: DragEvent
): Transaction | null => {
  const { state } = view;

  const $pos = state.selection.$anchor;
  for (let d = $pos.depth; d > 0; d--) {
    const node = $pos.node(d);
    if (node.type.spec["tableRole"] == "table") {
      const eventPos = view.posAtCoords({
        left: event.clientX,
        top: event.clientY
      });
      if (!eventPos) return null;
      const slice = view.dragging?.slice;
      if (!slice) return null;

      const $mouse = view.state.doc.resolve(eventPos.pos);
      const insertPos = dropPoint(view.state.doc, $mouse.pos, slice);
      if (!insertPos) return null;

      let tr = state.tr;
      tr = tr.delete($pos.before(d), $pos.after(d));

      const pos = tr.mapping.map(insertPos);

      tr = tr.replaceRange(pos, pos, slice).scrollIntoView();

      return tr;
    }
  }

  return null;
};

export type ActiveNode = Readonly<{
  $pos: ResolvedPos;
  node: PMNode;
  el: HTMLElement;
  offset: number;
}>;

const nodeIsNotBlock = (node: PMNode) => !node.type.isBlock;

const nodeIsFirstChild = (pos: ResolvedPos) => {
  let parent = pos.parent;
  const node = pos.node();

  if (parent === node) {
    parent = pos.node(pos.depth - 1);
  }
  if (!parent || parent.type.name === "doc") return false;

  return parent.firstChild === node;
};

const getDOMByPos = (
  view: EditorView,
  root: HTMLElement,
  $pos: ResolvedPos
) => {
  const { node } = view.domAtPos($pos.pos);

  let el: HTMLElement = node as HTMLElement;
  let parent = el.parentElement;
  while (parent && parent !== root && $pos.pos === view.posAtDOM(parent, 0)) {
    el = parent;
    parent = parent.parentElement;
  }

  return el;
};

export const selectRootNodeByDom = (
  dom: Element,
  view: EditorView
): ActiveNode | null => {
  const root = view.dom.parentElement;

  if (!root) return null;

  let pos = view.posAtDOM(dom, 0);

  /**
   * img 节点修正
   */
  if (dom.tagName === "IMG") {
    pos -= 1;
  }

  if (pos === 0) return null;

  let $pos = view.state.doc.resolve(pos);
  let node = $pos.node();

  /**
   * 自定义节点修正
   */
  if (node.type.name === "doc") {
    const nodeAtPos = view.state.doc.nodeAt(pos);

    if (
      nodeAtPos &&
      nodeAtPos.type.name !== "doc" &&
      nodeAtPos.type.name !== "text"
    ) {
      node = nodeAtPos;
      $pos = view.state.doc.resolve(pos);
      const el = view.nodeDOM(pos) as HTMLElement;
      return { node, $pos, el, offset: 0 };
    }
  }

  while (node && (nodeIsNotBlock(node) || nodeIsFirstChild($pos))) {
    $pos = view.state.doc.resolve($pos.before());
    node = $pos.node();
  }

  if (node.type.name.includes("table")) {
    while (node.type.name !== "table") {
      $pos = view.state.doc.resolve($pos.before());
      node = $pos.node();
    }
  }

  $pos = view.state.doc.resolve($pos.pos - $pos.parentOffset);
  const el = getDOMByPos(view, root, $pos);

  return { node, $pos, el, offset: 1 };
};
