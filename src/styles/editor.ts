import styled from "styled-components";

export const StyledEditor = styled.div`
  box-sizing: border-box;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeight};
  font-size: 1em;
  line-height: 1.7em;
  width: 100%;
  padding: 0 12px;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  > div {
    position: relative;
  }

  .ProseMirror {
    position: relative;
    outline: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
  }

  .ProseMirror-hideselection *::selection {
    background: transparent;
  }

  .ProseMirror-hideselection {
    caret-color: transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin: 1em 0 0.5em;
    font-weight: 500;
    cursor: text;

    &:not([data-placeholder]):before {
      display: inline-block;
      font-family: ${props => props.theme.fontFamilyMono};
      color: ${props => props.theme.textSecondary};
      font-size: 13px;
      line-height: 0;
      margin-left: -24px;
      transition: opacity 150ms ease-in-out;
      opacity: 0;
      width: 24px;
    }

    &:hover,
    &:focus-within {
      .heading-actions {
        opacity: 1;
      }
    }
  }

  .heading-anchor,
  .heading-fold {
    display: inline-block;
    color: ${props => props.theme.text};
    opacity: 0.75;
    cursor: pointer;
    background: none;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    text-align: left;
    font-family: ${props => props.theme.fontFamilyMono};
    font-size: 14px;
    line-height: 0;
    width: 12px;
    height: 24px;

    &:focus,
    &:hover {
      opacity: 1;
    }
  }

  .heading-actions {
    opacity: 0;
    background: ${props => props.theme.background};
    flex-direction: row;
    display: inline-flex;
    position: absolute;
    top: -2px;
    left: -16px;
    height: 24px;

    &.collapsed {
      opacity: 1;
    }

    &.collapsed .heading-anchor {
      opacity: 0;
    }

    &.collapsed .heading-fold {
      opacity: 1;
    }
  }

  .heading-fold {
    display: inline-block;
    transform-origin: center;
    padding: 0;

    &.collapsed {
      transform: rotate(-90deg);
      transition-delay: 0.1s;
      opacity: 1;
    }
  }

  .folded-content {
    display: none;
  }

  p {
    margin: 0;

    span:first-child + br:last-child {
      display: none;
    }
  }

  blockquote {
    position: relative;
    margin: 0.5em 0;
    padding-left: 1em;
    border-left: 2px solid ${props => props.theme.blockquoteBorderColor};
    color: ${props => props.theme.blockquoteTextColor};
  }

  hr {
    position: relative;
    height: 1em;
    border: 0;
  }

  hr:before {
    content: "";
    display: block;
    position: absolute;
    border-top: 1px solid ${props => props.theme.horizontalRule};
    top: 0.5em;
    left: 0;
    right: 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  /* S List */
  ol,
  ul {
    margin: 0;
    padding-left: 18px;

    p {
      margin: 0;
    }
  }

  li > ul,
  li > ol,
  ul > ul,
  ol > ol {
    margin-top: 0;
  }

  ul {
    list-style-type: disc;
  }

  ol,
  ol ol ol ol,
  ol ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol ol {
    list-style-type: decimal;
  }

  ol ol,
  ol ol ol ol ol,
  ol ol ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol ol ol {
    list-style-type: lower-alpha;
  }

  ol ol ol,
  ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol,
  ol ol ol ol ol ol ol ol ol ol ol ol {
    list-style-type: lower-roman;
  }

  ul[data-type="taskList"] {
    padding: 0;
    list-style: none;

    li {
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 16px;
      cursor: pointer;

      > label {
        position: absolute;
        top: 6px;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border: 1px solid var(--semi-color-border);
        border-radius: 2px;

        > input {
          display: none;
        }

        &::after {
          position: absolute;
          top: -0.357143px;
          left: 4.071429px;
          width: 6.714286px;
          height: 12.142857px;
          border: 2px solid #fff;
          content: " ";
          opacity: 0;
          transform: rotate(45deg) scale(0);
          border-top: 0;
          border-left: 0;
          transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
            opacity 0.1s;
        }
      }

      > div {
        flex: 1 1 auto;
        padding-left: 0.5rem;
      }

      &[data-checked="true"] {
        color: var(--semi-color-text-2);

        > label {
          background-color: var(--semi-color-primary);

          &::after {
            opacity: 1;
            transform: rotate(45deg) scale(1);
          }
        }

        > div {
          p {
            text-decoration: line-through;
          }
        }
      }
    }
  }
  /* E List */

  /* S Table */
  .tableWrapper {
    position: relative;
    margin: 0.5em 0px;

    &.has-focus {
      .scrollWrapper {
        margin-top: -20px;
      }
    }
  }

  .scrollWrapper {
    overflow-y: hidden;
    overflow-x: auto;
    padding-left: 28px;
    padding-top: 28px;
    padding-bottom: 8px;
    margin-left: -28px;
    margin-top: -20px;
    margin-bottom: -8px;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    -webkit-transition: border 250ms ease-in-out 0s;
    transition: border 250ms ease-in-out 0s;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 4px;
    overflow: auto;

    box-sizing: border-box;

    * {
      box-sizing: border-box;
    }

    tr {
      position: relative;
      border-bottom: 1px solid ${props => props.theme.tableBorderColor};
    }

    th {
      background: ${props => props.theme.tableHeaderBgColor};
    }

    td,
    th {
      position: relative;
      vertical-align: top;
      border: 1px solid ${props => props.theme.tableBorderColor};
      position: relative;
      padding: 4px 8px;
      text-align: left;
      min-width: 100px;
    }

    .selectedCell {
      position: relative;
      border: 1px solid ${props => props.theme.tableSelectedBorderColor};
      background-color: ${props => props.theme.tableSelectedCellBgColor};

      &::after {
        box-sizing: content-box;
        height: 100%;
        width: 100%;
        border: 1px solid ${props => props.theme.tableSelectedBorderColor};
        content: "";
        position: absolute;
        left: -1px;
        top: -1px;
        bottom: 0px;
        z-index: 12;
        display: inline-block;
        pointer-events: none;
      }
    }

    .grip-column {
      position: absolute;
      top: -12px;
      left: -1px;
      width: 100%;

      font-size: 0;

      > span {
        position: absolute;
        top: -18px;
        left: 100%;
        transform: translateX(-8px);

        display: inline-block;
        width: 16px;
        height: 16px;
      }

      &::before {
        content: "";
        position: absolute;
        left: 100%;
        bottom: 4px;
        transform: translateX(-1px);

        width: 4px;
        height: 4px;
        background-color: ${props => props.theme.tableBorderColor};
        border-radius: 50%;
        display: block;
      }

      &::after {
        box-sizing: content-box;
        content: "";
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background: ${props => props.theme.tableHeaderBgColor};
        border: 1px solid ${props => props.theme.tableBorderColor};
        display: block;
      }

      &:hover {
        font-size: 14px;
        color: ${props => props.theme.tableSelectedBorderColor};

        &::before {
          display: none;
        }

        &::after {
          background: ${props => props.theme.tableSelectedControlBgColor};
          border-color: ${props => props.theme.tableSelectedControlBgColor};
        }
      }

      &.last::after {
        border-top-right-radius: 3px;
      }

      &.selected::after {
        background: ${props => props.theme.tableSelectedControlBgColor};
        border-color: ${props => props.theme.tableSelectedControlBgColor};
      }
    }

    .grip-row {
      position: absolute;
      left: -12px;
      top: -1px;
      height: 100%;
      font-size: 0;

      > span {
        transform: translateY(8px);
        position: absolute;
        left: -16px;
        bottom: 4px;

        display: inline-block;
        width: 16px;
        height: 16px;
      }

      &::before {
        content: "";
        position: absolute;
        left: -10px;
        bottom: -2px;
        width: 4px;
        height: 4px;
        background-color: ${props => props.theme.tableBorderColor};
        border-radius: 50%;
        display: block;
      }

      &::after {
        box-sizing: content-box;
        content: "";
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 10px;
        background: ${props => props.theme.tableHeaderBgColor};
        border: 1px solid ${props => props.theme.tableBorderColor};
        display: block;
      }

      &:hover {
        font-size: 14px;
        color: ${props => props.theme.tableSelectedBorderColor};

        &::before {
          display: none;
        }

        &::after {
          background: ${props => props.theme.tableSelectedControlBgColor};
          border-color: ${props => props.theme.tableSelectedBorderColor};
        }
      }

      &.last::after {
        border-bottom-left-radius: 3px;
      }

      &.selected::after {
        background: ${props => props.theme.tableSelectedControlBgColor};
        border-color: ${props => props.theme.tableSelectedBorderColor};
      }
    }

    .grip-table {
      &::after {
        box-sizing: content-box;
        content: "";
        cursor: pointer;
        position: absolute;
        top: -12px;
        left: -12px;
        display: block;
        background: ${props => props.theme.tableHeaderBgColor};
        width: 10px;
        height: 10px;
        border: 1px solid ${props => props.theme.tableBorderColor};
        border-top-left-radius: 3px;
      }

      &:hover::after {
        background: ${props => props.theme.tableSelectedControlBgColor};
        border-color: ${props => props.theme.tableSelectedBorderColor};
      }

      &.selected::after {
        background: ${props => props.theme.tableSelectedControlBgColor};
        border-color: ${props => props.theme.tableSelectedBorderColor};
      }
    }
  }

  .column-resize-handle {
    position: absolute;
    top: 0;
    right: -2px;
    bottom: -2px;
    width: 4px;
    pointer-events: none;
    background-color: ${props => props.theme.tableResizeHandleBgColor};
  }

  .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize; /* stylelint-disable declaration-block-no-duplicate-properties */
  }
  /* E Table */

  /* S Code */
  code {
    padding: 4px;
    font-family: ${props => props.theme.fontFamilyMono};
    font-size: 0.875rem;
    line-height: 1.3;
    cursor: text;
    background-color: #f5f6f7;
    border-radius: 4px;
  }

  pre {
    position: relative;
    display: flex;
    min-width: 48px;
    margin: 0;
    line-height: 1.3;
    background-color: #f5f6f7;
    counter-reset: line 0;

    code {
      width: 100%;
      padding: 0;
      margin: 12px;
      overflow: auto;
      font-size: 0.875rem;
      line-height: 1.5rem;
      color: inherit;
      white-space: pre;
      background-color: transparent;
      overscroll-behavior: contain;
    }
  }
  /* E Code */

  /* S ReactRenderer */
  .react-renderer {
    margin: 0.75em 0;
    line-height: 0;
  }
  /* E ReactRenderer */

  /* S Resizable */
  .resizable {
    position: relative;
    display: inline-block;
    max-width: 100%;
    vertical-align: top;
  }
  /* E Resizable */

  /* S Dragable */
  [data-drag-handle] {
    position: absolute;
    z-index: 100;
    display: inline;
    width: 16px;
    height: 16px;
    cursor: move;
    background-color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='3' y='1' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='10' y='1' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='3' y='6' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='10' y='6' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='3' y='11' width='3' height='3' rx='1.5' fill='%23111'/%3E%3Crect x='10' y='11' width='3' height='3' rx='1.5' fill='%23111'/%3E%3C/svg%3E");
    background-size: contain;
    background-position: center 0;
    background-repeat: no-repeat;

    &.show {
      opacity: 0.3;

      &:hover {
        opacity: 1;
      }
    }

    &.hide {
      opacity: 0;
    }
  }
  /* E Dragable */

  /* S Placeholder */
  .is-empty {
    position: relative;

    &.has-focus {
      &::before {
        float: left;
        height: 0;
        color: #aaa;
        pointer-events: none;
        content: attr(data-placeholder);
      }
    }

    &.node-codeBlock::before {
      display: none;
    }
  }
  /* E Placeholder */

  .collaboration-cursor__caret {
    position: relative;
    border-left: 1px solid #0d0d0d;
    margin-right: -1px;
    margin-left: -1px;
    word-break: normal;
    pointer-events: none;
    border-right: 1px solid #0d0d0d;
  }

  .collaboration-cursor__label {
    position: absolute;
    top: -1.4em;
    left: -1px;
    padding: 0.1rem 0.3rem;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #0d0d0d;
    white-space: nowrap;
    border-radius: 3px 3px 3px 0;
    user-select: none;
  }

  .columns {
    display: flex;
    width: 100%;
    gap: 8px;

    .column {
      min-width: 0;
      padding: 12px;
      border: 1px solid ${props => props.theme.borderColor};
      border-radius: ${props => props.theme.borderRadius};
      flex: 1 1 0%;
      box-sizing: border-box;

      p {
        &:first-of-type {
          margin-top: 0;
        }
      }
    }
  }

  /* S Tooltip */
  .tippy-box[data-animation="fade"][data-state="hidden"] {
    opacity: 0;
  }
  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }
  .tippy-box {
    position: relative;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    white-space: normal;
    outline: 0;
    transition-property: transform, visibility, opacity;
  }
  .tippy-box[data-theme~="bubble-menu"] {
    background-color: #fff;
    padding: 0;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 6px;
    color: #333;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow {
    bottom: 0;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow {
    top: 0;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow {
    right: 0;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow {
    left: 0;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }
  .tippy-box[data-inertia][data-state="visible"] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
  .tippy-arrow {
    width: 16px;
    height: 16px;
    color: #333;
  }
  .tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }
  .tippy-content {
    position: relative;
    padding: 4px 6px;
    z-index: 1;

    ul,
    ol {
      padding: 0;
    }
  }
  .tippy-box[data-theme~="bubble-menu"] .tippy-content {
    overflow-x: auto;
    overflow-y: visible;
  }
  .tippy-box[data-theme~="padding-0"] .tippy-content {
    padding: 0;
  }
  .tippy-box[data-theme~="padding-8"] .tippy-content {
    padding: 8px 12px;
  }
  .tippy-box[data-theme~="hidden"] {
    display: none;
  }
  /* E Tooltip */

  /* S highlight */
  .hljs {
    color: #24292e;
    background: #fff;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-meta .hljs-keyword,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-type,
  .hljs-variable.language_ {
    /* prettylights-syntax-keyword */
    color: #d73a49;
  }

  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    /* prettylights-syntax-entity */
    color: #6f42c1;
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-variable,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id {
    /* prettylights-syntax-constant */
    color: #005cc5;
  }

  .hljs-regexp,
  .hljs-string,
  .hljs-meta .hljs-string {
    /* prettylights-syntax-string */
    color: #032f62;
  }

  .hljs-built_in,
  .hljs-symbol {
    /* prettylights-syntax-variable */
    color: #e36209;
  }

  .hljs-comment,
  .hljs-code,
  .hljs-formula {
    /* prettylights-syntax-comment */
    color: #6a737d;
  }

  .hljs-name,
  .hljs-quote,
  .hljs-selector-tag,
  .hljs-selector-pseudo {
    /* prettylights-syntax-entity-tag */
    color: #22863a;
  }

  .hljs-subst {
    /* prettylights-syntax-storage-modifier-import */
    color: #24292e;
  }

  .hljs-section {
    font-weight: bold;

    /* prettylights-syntax-markup-heading */
    color: #005cc5;
  }

  .hljs-bullet {
    /* prettylights-syntax-markup-list */
    color: #735c0f;
  }

  .hljs-emphasis {
    font-style: italic;

    /* prettylights-syntax-markup-italic */
    color: #24292e;
  }

  .hljs-strong {
    font-weight: bold;

    /* prettylights-syntax-markup-bold */
    color: #24292e;
  }

  .hljs-addition {
    /* prettylights-syntax-markup-inserted */
    color: #22863a;
    background-color: #f0fff4;
  }

  .hljs-deletion {
    /* prettylights-syntax-markup-deleted */
    color: #b31d28;
    background-color: #ffeef0;
  }
  /* E highlight */

  /* S Mind */
  .km-view {
    font-family: "STHeitiSC-Light", "STHeiti", "Hei", "Heiti SC",
      "Microsoft Yahei", Arial, sans-serif;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
  }

  .km-view .km-receiver {
    position: absolute;
    left: -99999px;
    top: -99999px;
    width: 20px;
    height: 20px;
    outline: none;
    margin: 0;
  }

  .km-view image {
    cursor: zoom-in;
  }

  .km-image-viewer {
    position: fixed;
    z-index: 99999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.75);
  }

  .km-image-viewer .km-image-viewer-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;
    overflow: auto;
  }

  .km-image-viewer .km-image-viewer-container::before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    font-size: 0;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img {
    cursor: zoom-out;
    vertical-align: middle;
  }

  .km-image-viewer .km-image-viewer-container img.limited {
    cursor: zoom-in;
    max-width: 100%;
    max-height: 100%;
  }

  .km-image-viewer .km-image-viewer-toolbar {
    z-index: 1;
    background: rgba(0, 0, 0, 0.75);
    text-align: right;
    transition: all 0.25s;
  }

  .km-image-viewer .km-image-viewer-toolbar.hidden {
    transform: translate(0, -100%);
    opacity: 0;
  }

  .km-image-viewer .km-image-viewer-btn {
    cursor: pointer;
    outline: 0;
    border: 0;
    width: 44px;
    height: 44px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+);
  }

  .km-image-viewer .km-image-viewer-toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .km-image-viewer .km-image-viewer-close {
    background-position: 0 -44px;
  }
  /* E Mind */
`;
