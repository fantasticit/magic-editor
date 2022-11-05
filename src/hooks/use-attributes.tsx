import { Editor } from "@tiptap/core";
import deepEqual from "deep-equal";
import React, { useEffect, useRef, useState } from "react";

type MapFn<T, R> = (arg: T) => R;

function mapSelf<T>(d: T): T {
  return d;
}

export function useAttributes<T extends object, R = T>(
  editor: Editor,
  attribute: string,
  defaultValue?: T,
  map?: (arg: T) => R
) {
  const mapFn = (map || mapSelf) as MapFn<T, R>;
  const [value, setValue] = useState<R>(mapFn(defaultValue as T));
  const prevValueCache = useRef<R>(value);

  useEffect(() => {
    const listener = () => {
      const attrs = {
        ...defaultValue,
        ...editor.getAttributes(attribute)
      } as T;
      Object.keys(attrs).forEach(key => {
        if (attrs[key] === null || attrs[key] === undefined) {
          // @ts-ignore
          attrs[key] = defaultValue[key];
        }
      });
      const nextAttrs = mapFn(attrs);
      if (deepEqual(prevValueCache.current, nextAttrs)) {
        return;
      }
      setValue(nextAttrs);
      prevValueCache.current = nextAttrs;
    };

    editor.on("selectionUpdate", listener);
    editor.on("transaction", listener);

    return () => {
      editor.off("selectionUpdate", listener);
      editor.off("transaction", listener);
    };
  }, [editor, defaultValue, attribute, mapFn]);

  return value;
}
