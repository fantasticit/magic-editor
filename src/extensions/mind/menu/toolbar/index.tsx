import React, { useCallback, useEffect, useState } from "react";

import { Divider, Space, Button, Tooltip } from "../../../../components";
import {
  IconBold,
  IconCenter,
  IconRedo,
  IconUndo,
  IconZoomIn,
  IconZoomOut
} from "../../../../icons";

import { BgColor } from "./bgcolor";
import { FontColor } from "./font-color";
import { Help } from "./help";
import { Image } from "./image";
import { Link } from "./link";
import { Priority } from "./priority";
import { Progress } from "./progress";
import { Template } from "./template";
import { Theme } from "./theme";

export const Toolbar = ({ editor, mind }) => {
  const [node, setNode] = useState(null); // 当前选择节点

  const [hasUndo, toggleHasUndo] = useState(false);
  const [hasRedo, toggleHasRedo] = useState(false);

  const [isBold, toggleIsBold] = useState(false);
  const [textColor, setTextColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const [template, setTemplateState] = useState("");
  const [theme, setThemeState] = useState("");

  /**
   * 撤销
   */
  const undo = useCallback(() => {
    if (!mind) return;
    if (mind.editor.history.hasUndo()) {
      mind.editor.history.undo();
    }
  }, [mind]);

  /**
   * 重做
   */
  const redo = useCallback(() => {
    if (!mind) return;
    if (mind.editor.history.hasRedo()) {
      mind.editor.history.redo();
    }
  }, [mind]);

  /**
   * 加粗
   */
  const toggleBold = useCallback(() => {
    if (!mind) return;

    mind.execCommand("Bold");
  }, [mind]);

  /**
   * 设置文字颜色
   */
  const setFontColor = useCallback(
    color => {
      if (!mind) return;

      mind.execCommand("ForeColor", color);
    },
    [mind]
  );

  /**
   * 设置背景色
   */
  const setBackgroundColor = useCallback(
    color => {
      if (!mind) return;

      mind.execCommand("Background", color);
    },
    [mind]
  );

  /**
   * 设置链接
   */
  const setHyperLink = useCallback(
    url => {
      if (!mind) return;

      mind.execCommand("HyperLink", url);
    },
    [mind]
  );

  /**
   * 插入图片
   */
  const insertImage = useCallback(
    url => {
      if (!mind) return;

      mind.execCommand("Image", url);
    },
    [mind]
  );

  /**
   * 设置进度
   */
  const setProgress = useCallback(
    value => () => {
      if (!mind) return;

      const node = mind.getSelectedNode();
      if (!node) return;

      mind.execCommand("progress", value);
    },
    [mind]
  );

  /**
   * 设置优先级
   */
  const setPriority = useCallback(
    value => () => {
      if (!mind) return;

      const node = mind.getSelectedNode();
      if (!node) return;

      mind.execCommand("priority", value);
    },
    [mind]
  );

  /**
   * 模板
   */
  const setTemplate = useCallback(
    template => {
      if (!mind) return;

      mind.execCommand("template", template);
    },
    [mind]
  );

  /**
   * 主题
   */
  const setTheme = useCallback(
    theme => {
      if (!mind) return;

      mind.execCommand("theme", theme);
    },
    [mind]
  );

  /**
   * 缩放
   */
  const setZoom = useCallback(
    (type: "minus" | "plus") => {
      return () => {
        if (!mind) return;
        mind.execCommand(type === "minus" ? "zoomOut" : "zoomIn");
      };
    },
    [mind]
  );

  /**
   * 定位到根节点
   */
  const setCenter = useCallback(() => {
    if (!mind) return;
    mind.execCommand("camera", mind.getRoot(), 600);
  }, [mind]);

  useEffect(() => {
    if (!mind) return;

    const handler = () => {
      const node = mind.getSelectedNode();

      let isBold = false;
      let textColor;
      let bgColor;
      let link;
      let image;

      if (node) {
        isBold = mind.queryCommandState("Bold") === 1;
        textColor = mind.queryCommandValue("ForeColor");
        bgColor = mind.queryCommandValue("Background");
        link = mind.queryCommandValue("HyperLink").url;
        image = mind.queryCommandValue("Image").url;
        setNode(node);
      } else {
        setNode(null);
      }

      toggleHasUndo(mind.editor.history.hasUndo());
      toggleHasRedo(mind.editor.history.hasRedo());

      setTemplateState(mind.queryCommandValue("Template"));
      setThemeState(mind.queryCommandValue("Theme"));
      toggleIsBold(isBold);
      setTextColor(textColor);
      setBgColor(bgColor);
      setLink(link);
      setImage(image);
    };

    mind.on("interactchange", handler);

    return () => {
      mind.off("interactchange", handler);
    };
  }, [mind, toggleHasUndo, toggleHasRedo, toggleIsBold, setBackgroundColor]);

  return (
    <Space>
      <Tooltip editor={editor} zLevel="highest" title="撤销">
        <Button onClick={undo} icon={<IconUndo />} disabled={!hasUndo} />
      </Tooltip>

      <Tooltip editor={editor} zLevel="highest" title="重做">
        <Button onClick={redo} icon={<IconRedo />} disabled={!hasRedo} />
      </Tooltip>

      <Divider />

      <Tooltip editor={editor} zLevel="highest" title="加粗">
        <Button disabled={!node} onClick={toggleBold} icon={<IconBold />} />
      </Tooltip>

      <FontColor
        editor={editor}
        selectedNode={node}
        textColor={textColor}
        setFontColor={setFontColor}
      />
      <BgColor
        editor={editor}
        selectedNode={node}
        bgColor={bgColor}
        setBackgroundColor={setBackgroundColor}
      />
      <Link
        editor={editor}
        disabled={!node}
        link={link}
        setLink={setHyperLink}
      />
      <Image
        editor={editor}
        disabled={!node}
        image={image}
        setImage={insertImage}
      />

      <Divider />

      <Progress editor={editor} selectedNode={node} setProgress={setProgress} />
      <Priority editor={editor} selectedNode={node} setPriority={setPriority} />

      <Divider />

      <Tooltip editor={editor} zLevel="highest" title="居中">
        <Button
          size="small"
          icon={<IconCenter style={{ fontSize: "0.85em" }} />}
          onClick={setCenter}
        />
      </Tooltip>

      <Tooltip editor={editor} zLevel="highest" title="缩小">
        <Button
          size="small"
          icon={<IconZoomOut style={{ fontSize: "0.85em" }} />}
          onClick={setZoom("minus")}
        />
      </Tooltip>

      <Tooltip editor={editor} zLevel="highest" title="放大">
        <Button
          size="small"
          icon={<IconZoomIn style={{ fontSize: "0.85em" }} />}
          onClick={setZoom("plus")}
        />
      </Tooltip>

      <Divider />

      <Template editor={editor} template={template} setTemplate={setTemplate} />
      <Theme editor={editor} theme={theme} setTheme={setTheme} />

      <Divider />

      <Help />
    </Space>
  );
};
