import React, { useCallback } from "react";
import { Select as ReactSelect } from "@douyinfe/semi-ui";
import { SelectProps as ReactSelectProps } from "@douyinfe/semi-ui/lib/es/select";
import { Editor } from "@tiptap/core";

interface SelectProps extends ReactSelectProps {
  editor: Editor;
  options: Array<{ label: React.ReactNode; value: unknown }>;
}

export function Select(props: React.PropsWithChildren<SelectProps>) {
  const { editor, value, options, onChange, ...rest } = props;

  const getPopupContainer = useCallback(() => {
    return editor.options.element as HTMLElement;
  }, [editor]);

  // @ts-ignore
  return (
    // @ts-ignore
    <ReactSelect
      getPopupContainer={getPopupContainer}
      value={value}
      onChange={onChange}
      size="small"
      {...rest}>
      {options.map(option => {
        // @ts-ignore
        return (
          // @ts-ignore
          <ReactSelect.Option key={option.value} value={option.value}>
            {option.label}
          </ReactSelect.Option>
        );
      })}
    </ReactSelect>
  );
}
