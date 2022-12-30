import React, { useRef, useCallback, useMemo } from "react";
import { NodeViewWrapper, NodeViewContent, NodeViewProps } from "@tiptap/react";
import styled from "styled-components";

import { IconCopy } from "../../icons";
import { Tooltip, Button, Select } from "../../components";
import { copy } from "../../utilities";
import i18n from "../../i18n";

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0;
  padding: 6px 12px;
  border: 1px solid ${props => props.theme.codeBlockBorderColor};
  border-bottom: 0;
`;

const StyledContent = styled.div`
  border: 1px solid ${props => props.theme.codeBlockBorderColor};
`;

export const CodeBlockView: React.FC<NodeViewProps> = ({
  editor,
  node: { attrs },
  updateAttributes,
  extension
}) => {
  const isEditable = editor.isEditable;
  const { language: defaultLanguage } = attrs;
  const $container = useRef<HTMLPreElement>(null);

  const languages = useMemo(
    () => [
      {
        label: "auto",
        value: "auto"
      },
      ...(extension?.options?.lowlight?.listLanguages?.() || []).map((lang: string) => ({
        label: lang,
        value: lang
      }))
    ],
    [extension]
  );

  const getPopupContainer = useCallback(
    () => (editor ? editor.options.element : document.body) as HTMLElement,
    [editor]
  );

  return (
    <NodeViewWrapper style={{ position: "relative" }}>
      <StyledToolbar>
        <Select
          editor={editor}
          value={defaultLanguage || "auto"}
          options={languages}
          onChange={value => updateAttributes({ language: value })}
          disabled={!isEditable}
          getPopupContainer={getPopupContainer}></Select>
        <Tooltip title={i18n('copy')} editor={editor}>
          <Button
            size="small"
            icon={<IconCopy />}
            onClick={() => copy($container?.current?.innerText as string)}
          />
        </Tooltip>
      </StyledToolbar>
      <StyledContent>
        <pre ref={$container}>
          <NodeViewContent as="code" />
        </pre>
      </StyledContent>
    </NodeViewWrapper>
  );
};
