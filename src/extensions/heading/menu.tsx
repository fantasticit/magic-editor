import type { Level } from '@tiptap/extension-heading';
import React, { useCallback, useMemo } from 'react';
import { Editor } from '@tiptap/core';

import { Select } from '../../components';
import { useActive } from '../../hooks/use-active';
import { Heading as HeadingExtension } from './heading';

type HeadingOrParagraph = Level | 'paragraph';

const options: Array<{ label: React.ReactNode; value: HeadingOrParagraph }> = [
  {
    label: '正文',
    value: 'paragraph',
  },
  {
    label: <h1 style={{ margin: 0, fontSize: '1.3em' }}>标题1</h1>,
    value: 1,
  },
  {
    label: <h2 style={{ margin: 0, fontSize: '1.1em' }}>标题2</h2>,
    value: 2,
  },
  {
    label: <h3 style={{ margin: 0, fontSize: '1.0em' }}>标题3</h3>,
    value: 3,
  },
  {
    label: <h4 style={{ margin: 0, fontSize: '0.9em' }}>标题4</h4>,
    value: 4,
  },
  {
    label: <h5 style={{ margin: 0, fontSize: '0.8em' }}>标题5</h5>,
    value: 5,
  },

  {
    label: <h6 style={{ margin: 0, fontSize: '0.8em' }}>标题6</h6>,
    value: 6,
  },
];

export const HeadingStaticMenu: React.FC<{ editor: Editor }> = ({ editor }) => {
  const isH1 = useActive(editor, HeadingExtension.name, { level: 1 });
  const isH2 = useActive(editor, HeadingExtension.name, { level: 2 });
  const isH3 = useActive(editor, HeadingExtension.name, { level: 3 });
  const isH4 = useActive(editor, HeadingExtension.name, { level: 4 });
  const isH5 = useActive(editor, HeadingExtension.name, { level: 5 });
  const isH6 = useActive(editor, HeadingExtension.name, { level: 6 });

  const current = useMemo<HeadingOrParagraph>(() => {
    if (isH1) return 1;
    if (isH2) return 2;
    if (isH3) return 3;
    if (isH4) return 4;
    if (isH5) return 5;
    if (isH6) return 6;
    return 'paragraph';
  }, [isH1, isH2, isH3, isH4, isH5, isH6]);

  const toggle = useCallback(
    (level: HeadingOrParagraph) => {
      if (level === 'paragraph') {
        // @ts-ignore
        editor.chain().focus().setParagraph().run();
      } else {
        editor.chain().focus().toggleHeading({ level }).run();
      }
    },
    [editor],
  );

  return (
    <Select
      editor={editor}
      value={current}
      // @ts-ignore
      onChange={toggle}
      options={options}
    ></Select>
  );
};
