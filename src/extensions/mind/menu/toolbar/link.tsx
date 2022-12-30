import React, { useCallback, useEffect, useRef, useState } from "react";

import { Dropdown, Button, Tooltip, Input } from "../../../../components";
import { IconLink } from "../../../../icons";
import i18n from "../../../../i18n";

export const Link = ({ editor, disabled, link, setLink }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState(link);

  const save = useCallback(() => {
    setLink(url);
  }, [url]);

  useEffect(() => {
    setUrl(link);
  }, [link]);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Dropdown
      stopPropagation
      zIndex={10000}
      trigger="click"
      position={"bottomLeft"}
      render={
        <div style={{ padding: 12 }}>
          <Input autofocus ref={inputRef} value={url} onChange={setUrl} />
          <Button type="primary" onClick={save} style={{ marginTop: 12 }}>
            {i18n('save')}
          </Button>
        </div>
      }>
      <span style={{ display: "inline-block" }}>
        <Tooltip editor={editor} title={i18n('mind', 'setLink')} zLevel="highest">
          <Button disabled={disabled} icon={<IconLink />} />
        </Tooltip>
      </span>
    </Dropdown>
  );
};
