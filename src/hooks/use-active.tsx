import { Editor } from '@tiptap/core';
import { useEffect, useState } from 'react';
import deepEqual from 'deep-equal';

function someEqual(sub: Record<string, unknown> | undefined, full: Record<string, unknown>) {
  if (!sub) return false;

  return Object.keys(sub).every(key => deepEqual(sub[key], full[key]));
}

export const useActive = (editor: Editor, name: string, attributes?: Record<string, unknown>) => {
  const [active, toggleActive] = useState(false);

  useEffect(() => {
    const listener = () => {
      const selection = editor.state.selection;
      const node = selection.$head.node(selection.$head.depth);
      toggleActive(someEqual(attributes, node.attrs) || editor.isActive(name, attributes));
    };

    editor.on('selectionUpdate', listener);
    editor.on('transaction', listener);

    return () => {
      editor.off('selectionUpdate', listener);
      editor.off('transaction', listener);
    };
  }, [editor, name, attributes, toggleActive]);

  return active;
};
