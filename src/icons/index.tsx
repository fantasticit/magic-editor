import React from "react";
import { buildIcon } from "./icon";

export const IconPlus = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M20.5 13.5C21.3284 13.5 22 12.8284 22 12C22 11.1716 21.3284 10.5 20.5 10.5L13.5 10.5L13.5 3.5C13.5 2.67157 12.8284 2 12 2C11.1716 2 10.5 2.67157 10.5 3.5L10.5 10.5L3.5 10.5C2.67157 10.5 2 11.1716 2 12C2 12.8284 2.67157 13.5 3.5 13.5L10.5 13.5V20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5V13.5L20.5 13.5Z"
      fill="currentColor"></path>
  </svg>
);

export const IconEdit = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
  </svg>
);

export const IconBold = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3C6 2.44772 6.44772 2 7 2H12.5C15.7318 2 18.5 4.49474 18.5 7.75C18.5 9.23767 17.9219 10.5665 16.9855 11.571C18.4934 12.6006 19.5 14.287 19.5 16.25C19.5 19.5053 16.7318 22 13.5 22H7C6.44772 22 6 21.5523 6 21V3ZM13 19C14.7388 19 16 17.6892 16 16.25C16 14.8108 14.7388 13.5 13 13.5H9.00003V19H13ZM12 10.5C13.7388 10.5 15 9.18916 15 7.75C15 6.31084 13.7388 5 12 5H9.00003V10.5H12Z"
      fill="currentColor"></path>
  </svg>
);

export const IconItalic = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3.5C9 2.67157 9.67157 2 10.5 2H17.5C18.3284 2 19 2.67157 19 3.5C19 4.32843 18.3284 5 17.5 5H15.5L12 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22H6.5C5.67157 22 5 21.3284 5 20.5C5 19.6716 5.67157 19 6.5 19H8.5L12 5H10.5C9.67157 5 9 4.32843 9 3.5Z"
      fill="currentColor"></path>
  </svg>
);

export const IconUnderline = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M7 2C6.17157 2 5.5 2.67157 5.5 3.5V11C5.5 14.5899 8.41015 17.5 12 17.5C15.5899 17.5 18.5 14.5899 18.5 11V3.5C18.5 2.67157 17.8284 2 17 2C16.1716 2 15.5 2.67157 15.5 3.5V11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11V3.5C8.5 2.67157 7.82843 2 7 2Z"
      fill="currentColor"></path>
    <path
      d="M5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22H18.5C19.3284 22 20 21.3284 20 20.5C20 19.6716 19.3284 19 18.5 19H5.5Z"
      fill="currentColor"></path>
  </svg>
);

export const IconStrike = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 4.5C9.71311 4.5 8.49999 5.93921 8.49999 7C8.49999 8.06895 9.2604 9.60002 12.2163 10.5H6.74635C5.9307 9.47544 5.49999 8.28481 5.49999 7C5.49999 4.06079 8.28687 1.5 11.5 1.5C14.4721 1.5 16.9167 2.72229 18.7 5.1C19.197 5.76274 19.0627 6.70294 18.4 7.2C17.7372 7.69706 16.797 7.56274 16.3 6.9C15.0833 5.27771 13.5279 4.5 11.5 4.5Z"
      fill="currentColor"></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7183 15.5H19.2439C19.4081 15.9665 19.5 16.4668 19.5 17C19.5 18.8721 18.4653 20.3055 17.0451 21.2048C15.6584 22.0828 13.8591 22.5 12 22.5C8.07666 22.5 5.23007 20.105 4.54477 17.3638C4.34385 16.5601 4.83249 15.7457 5.63619 15.5448C5.74807 15.5168 5.86017 15.5022 5.97079 15.5H6.03145C6.69154 15.5134 7.28738 15.9649 7.4552 16.6362C7.76991 17.895 9.2959 19.5 12 19.5C13.4546 19.5 14.6553 19.1672 15.4402 18.6702C16.1915 18.1945 16.5 17.6279 16.5 17C16.5 16.5665 16.3036 16.0589 15.7183 15.5Z"
      fill="currentColor"></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 10.5H21.5C22.3284 10.5 23 11.1716 23 12C23 12.8284 22.3284 13.5 21.5 13.5H2.5C1.67157 13.5 1 12.8284 1 12C1 11.1716 1.67157 10.5 2.5 10.5Z"
      fill="currentColor"></path>
  </svg>
);

export const IconCode = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" />
  </svg>
);

export const IconLink = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z" />
  </svg>
);

export const IconUnlink = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 17h5v2h-3v3h-2v-5zM7 7H2V5h3V2h2v5zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
  </svg>
);

export const IconVisitlink = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
  </svg>
);

export const IconDrag = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M362.666667 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
    <path d="M661.333333 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
    <path d="M362.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
    <path d="M661.333333 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
    <path d="M362.666667 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
    <path d="M661.333333 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
  </svg>
);

export const IconBlockquote = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

export const IconCodeBlock = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12 2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5z" />
  </svg>
);

export const IconCopy = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z" />
  </svg>
);

export const IconAlignLeft = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
  </svg>
);

export const IconAlignCenter = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z" />
  </svg>
);

export const IconAlignRight = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z" />
  </svg>
);

export const IconAlignJustify = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z" />
  </svg>
);
export const IconSuperscript = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.596 5l4.904 5.928L15.404 5H18l-6.202 7.497L18 19.994V20h-2.59l-4.91-5.934L5.59 20H3v-.006l6.202-7.497L3 5h2.596zM21.55 6.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 0 1 21 4a2 2 0 0 1 1.373 3.454L20.744 9H23v1h-4V9l2.55-2.42z" />
  </svg>
);

export const IconSubscript = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.596 4L10.5 9.928 15.404 4H18l-6.202 7.497L18 18.994V19h-2.59l-4.91-5.934L5.59 19H3v-.006l6.202-7.497L3 4h2.596zM21.55 16.58a.8.8 0 1 0-1.32-.36l-1.155.33A2.001 2.001 0 0 1 21 14a2 2 0 0 1 1.373 3.454L20.744 19H23v1h-4v-1l2.55-2.42z" />
  </svg>
);

export const IconHorizontalRule = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
    <g fill="none" fillRule="evenodd">
      <rect
        fill="currentColor"
        x="17"
        y="116"
        width="223"
        height="24"
        rx="12"></rect>
    </g>
  </svg>
);

export const IconTable = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 10v4h6v-4h-6zm-2 0H5v4h6v-4zm2 9h6v-3h-6v3zm-2 0v-3H5v3h6zm2-14v3h6V5h-6zm-2 0H5v3h6V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
  </svg>
);

export const IconCheck = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
  </svg>
);

export const IconStatus = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
  </svg>
);

export const IconImage = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);

export const IconImageAlignLeft = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm0-8h4a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1v-4a1 1 0 011-1zm0-4h12a1 1 0 010 2H6a1 1 0 110-2z"
      fill="currentColor"
      fillRule="evenodd"></path>
  </svg>
);

export const IconImageAlignCenter = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm4-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z"
      fill="currentColor"
      fillRule="evenodd"></path>
  </svg>
);

export const IconImageAlignRight = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M6 17h12a1 1 0 010 2H6a1 1 0 010-2zm8-8h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1zM6 5h12a1 1 0 010 2H6a1 1 0 110-2z"
      fill="currentColor"
      fillRule="evenodd"></path>
  </svg>
);

export const IconDelete = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
  </svg>
);

export const IconMore = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z" />
  </svg>
);

export const IconAddRowBefore = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M20 13c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1h16zm-1 2H5v4h14v-4zM12 1c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001V3z" />
  </svg>
);

export const IconAddRowAfter = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M12 13c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001V15zm7-12c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zM5 5v4h14V5H5z" />
  </svg>
);

export const IconDeleteRow = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M20 5c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1 .628.835 1 1.874 1 3 0 2.761-2.239 5-5 5s-5-2.239-5-5c0-1.126.372-2.165 1-3H4c-.552 0-1-.448-1-1V6c0-.552.448-1 1-1h16zm-7 10v2h6v-2h-6zm6-8H5v4h14V7z" />
  </svg>
);

export const IconAddColumnBefore = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1h-6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zm-1 2h-4v14h4V5zM6 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2H5v1.999L3 11v2l2-.001V15h2v-2.001L9 13v-2l-2-.001V9z" />
  </svg>
);

export const IconAddColumnAfter = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M10 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zM9 5H5v14h4V5zm9 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm1 2h-2v1.999L15 11v2l2-.001V15h2v-2.001L21 13v-2l-2-.001V9z" />
  </svg>
);

export const IconDeleteColumn = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M12 3c.552 0 1 .448 1 1v8c.835-.628 1.874-1 3-1 2.761 0 5 2.239 5 5s-2.239 5-5 5c-1.032 0-1.99-.313-2.787-.848L13 20c0 .552-.448 1-1 1H6c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h6zm-1 2H7v14h4V5zm8 10h-6v2h6v-2z" />
  </svg>
);

export const IconTableHeaderColumn = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M64 960l896 0L960 64 64 64 64 960zM640 384l0 256L384 640 384 384 640 384zM384 896l0-192 256 0 0 192L384 896zM320 896 258.88 896 320 834.88 320 896zM320 744.384 168.384 896 128 896l0-76.096 192-192L320 744.384zM128 729.344 128 611.904l192-192 0 117.504L128 729.344zM128 521.344 128 403.904l192-192 0 117.504L128 521.344zM128 313.344 128 227.904 227.904 128l85.504 0L128 313.344zM896 896l-192 0 0-192 192 0L896 896zM896 640l-192 0L704 384l192 0L896 640zM896 128l0 192-192 0L704 128 896 128zM640 320 384 320 384 128l256 0L640 320z"></path>
  </svg>
);

export const IconTableHeaderRow = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M128.1024 371.5072V216.9856a28.5696 28.5696 0 0 1 28.8768-28.2624h711.8848a28.5696 28.5696 0 0 1 28.8768 28.2624v154.5216z m769.6384 231.8336H675.0208v-182.272h222.8224v182.272z m0 204.0832a28.5696 28.5696 0 0 1-28.8768 28.2624H675.0208v-182.272h222.8224v153.6z m-496.128 27.7504v-182.272H624.64v182.272z m-244.6336 0a28.5696 28.5696 0 0 1-28.8768-28.2624V652.3904h222.8224v182.3744H156.9792z m193.9456-231.8336H128.1024v-182.272h222.8224zM624.64 421.0688v182.3744H401.6128V421.0688z m251.392-281.9072h-727.04a71.0656 71.0656 0 0 0-71.68 70.4512v605.3888a71.0656 71.0656 0 0 0 71.68 70.3488h727.04a71.68 71.68 0 0 0 71.68-70.3488V209.5104a71.0656 71.0656 0 0 0-71.68-70.3488z m0 0"></path>
    <path d="M169.984 211.2512h685.568a20.48 20.48 0 0 1 20.48 20.48v120.4224H149.504V231.7312a20.48 20.48 0 0 1 20.48-20.48z"></path>
  </svg>
);

export const IconTableHeaderCell = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M128 266.666667A138.666667 138.666667 0 0 1 266.666667 128h490.666666A138.666667 138.666667 0 0 1 896 266.666667v490.666666A138.666667 138.666667 0 0 1 757.333333 896H266.666667A138.666667 138.666667 0 0 1 128 757.333333V266.666667zM266.666667 192A74.666667 74.666667 0 0 0 192 266.666667V362.666667h170.666667v-170.666667H266.666667zM192 426.666667h170.666667v170.666666h-170.666667v-170.666666z m234.666667 0v170.666666h170.666666v-170.666666h-170.666666z m234.666666 0v170.666666h170.666667v-170.666666h-170.666667zM597.333333 661.333333h-170.666666v170.666667h170.666666v-170.666667z m64 170.666667v-170.666667h170.666667v96a74.666667 74.666667 0 0 1-74.666667 74.666667H661.333333z m0-469.333333v-170.666667h96c41.216 0 74.666667 33.450667 74.666667 74.666667V362.666667h-170.666667z m-64-170.666667v170.666667h-170.666666v-170.666667h170.666666z m-405.333333 469.333333h170.666667v170.666667H266.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V661.333333z"></path>
  </svg>
);

export const IconMergeCell = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M213.333333 426.666667H128V170.666667h341.333333v85.333333H213.333333v170.666667m597.333334 341.333333h-256v85.333333h341.333333v-256h-85.333333v170.666667M213.333333 768v-170.666667H128v256h341.333333v-85.333333H213.333333M896 170.666667h-341.333333v85.333333h256v170.666667h85.333333V170.666667M341.333333 554.666667v85.333333l128-128-128-128v85.333333H128v85.333334h213.333333m341.333334-85.333334V384l-128 128 128 128v-85.333333h213.333333v-85.333334h-213.333333z"></path>
  </svg>
);

export const IconSplitCell = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M810.016 598.016h86.016v256h-768v-256h86.016v170.016h596v-170.016zM128 170.016v256h86.016V256h596v170.016h86.016v-256h-768z m342.016 300v84h-128v86.016l-128-128 128-128v86.016h128z m212 0V384l128 128-128 128v-86.016h-128v-84h128z"></path>
  </svg>
);

export const IconDeleteTable = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M659.797 677.504l60.374-60.373 90.496 90.581 90.496-90.496 60.373 60.33L870.955 768l90.496 90.496-60.331 60.373-90.453-90.581-90.496 90.496-60.374-60.33L750.38 768l-90.496-90.496zM170.667 128H768a85.333 85.333 0 0 1 85.333 85.333v302.251a255.275 255.275 0 0 0-184.192 39.083H512v170.666h46.25a254.72 254.72 0 0 0-0.085 85.334H170.667a85.333 85.333 0 0 1-85.334-85.334v-512A85.333 85.333 0 0 1 170.667 128z m0 170.667v170.666h256V298.667h-256z m341.333 0v170.666h256V298.667H512z m-341.333 256v170.666h256V554.667h-256z"></path>
  </svg>
);

export const IconExcalidraw = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414L8.586 17zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1zm1 2v7h12V5H6z" />
  </svg>
);

export const IconZoomIn = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z" />
  </svg>
);

export const IconZoomOut = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM7 10h8v2H7v-2z" />
  </svg>
);

export const IconCenter = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
  </svg>
);

export const IconFontColor = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 5.885 9.554 12h4.892zM3 20h18v2H3v-2z" />
  </svg>
);

export const IconBackgroundColor = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z" />
  </svg>
);

export const IconHelpCircle = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" />
  </svg>
);

export const IconRedo = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5-6 5V7z" />
  </svg>
);

export const IconUndo = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z" />
  </svg>
);

export const IconPriority = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23ZM19.857 12C19.8568 13.5605 19.392 15.0855 18.5217 16.3808C17.6515 17.676 16.4153 18.6828 14.9706 19.2728C13.526 19.8628 11.9384 20.0093 10.4103 19.6936C8.88208 19.3778 7.48253 18.6142 6.39 17.5L12 12V4.143C14.0838 4.143 16.0823 4.97079 17.5557 6.44426C19.0292 7.91774 19.857 9.91619 19.857 12Z"
      fill="currentColor"></path>
  </svg>
);

export const IconProgress = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13.5 6.5V11.3787L17.0607 14.9393C17.6464 15.5251 17.6464 16.4749 17.0607 17.0607C16.4749 17.6464 15.5251 17.6464 14.9393 17.0607L10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12V6.5C10.5 5.67157 11.1716 5 12 5C12.8284 5 13.5 5.67157 13.5 6.5Z"
      fill="currentColor"></path>
  </svg>
);

export const IconMind = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M18 3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-1.1 0-2 .9-2 2v.171c1.166.412 2 1.523 2 2.829 0 1.306-.834 2.417-2 2.829V15c0 1.1.9 2 2 2h1.17c.412-1.165 1.524-2 2.83-2h3c1.657 0 3 1.343 3 3s-1.343 3-3 3h-3c-1.306 0-2.417-.834-2.829-2H11c-2.21 0-4-1.79-4-4H5c-1.657 0-3-1.343-3-3s1.343-3 3-3h2c0-2.21 1.79-4 4-4h1.17c.412-1.165 1.524-2 2.83-2h3zm0 14h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zM8 11H5c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1zm10-6h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c.552 0 1-.448 1-1s-.448-1-1-1z" />
  </svg>
);

export const IconMindTemplate = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M896 645.888V608C896 519.808 824.256 448 736 448H512V384h32c52.928 0 96-43.072 96-96v-128C640 107.072 596.928 64 544 64h-128C363.072 64 320 107.072 320 160v128C320 340.928 363.072 384 416 384H448v64H224A160.192 160.192 0 0 0 64 608v37.888c-37.184 13.248-64 48.448-64 90.112v128c0 52.928 43.072 96 96 96h64c52.928 0 96-43.072 96-96v-128c0-52.928-43.072-96-96-96H128v-32C128 555.072 171.072 512 224 512H448v128h-32c-52.928 0-96 43.072-96 96v128c0 52.928 43.072 96 96 96h128c52.928 0 96-43.072 96-96v-128c0-52.928-43.072-96-96-96H512V512h224c52.928 0 96 43.072 96 96v32h-32c-52.928 0-96 43.072-96 96v128c0 52.928 43.072 96 96 96h64c52.928 0 96-43.072 96-96v-128c0-41.664-26.816-76.864-64-90.112zM384 288v-128a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32h-128a32 32 0 0 1-32-32z m-192 448v128a32 32 0 0 1-32 32h-64a32 32 0 0 1-32-32v-128a32 32 0 0 1 32-32h64a32 32 0 0 1 32 32z m384 0v128a32 32 0 0 1-32 32h-128a32 32 0 0 1-32-32v-128a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32z m320 128c0 17.6-14.4 32-32 32h-64a32.064 32.064 0 0 1-32-32v-128c0-17.6 14.4-32 32-32h64c17.6 0 32 14.4 32 32v128z"></path>
  </svg>
);

export const IconMindTheme = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M21.957 2.13a1 1 0 0 0-1.406.147l-9.11 11.25a6.632 6.632 0 0 0-1.367 2.969.221.221 0 0 0 .302.244 6.632 6.632 0 0 0 2.62-1.955l9.109-11.25a1 1 0 0 0-.148-1.406Z"
      fill="currentColor"></path>
    <path
      d="M17.008 3.665a13.454 13.454 0 0 0-5.06-.984l-.024.004-.538.011-.51.03c-1.191.091-2.37.343-3.51.75a12.305 12.305 0 0 0-3.754 2.142c-1.096.922-1.96 1.99-2.568 3.176a8.435 8.435 0 0 0-.96 3.885c0 1.335.324 2.63.962 3.848.608 1.157 1.474 2.195 2.573 3.083a12.303 12.303 0 0 0 3.755 2.049c1.444.494 2.981.745 4.563.745l.545-.01.525-.029a14.43 14.43 0 0 0 1.57-.203l.722-.148.196-.06c.514-.186.96-.566 1.253-1.083a2.87 2.87 0 0 0 .26-2.178l-.09-.349-.03-.218a2.301 2.301 0 0 1 .357-1.454c.357-.544.93-.868 1.538-.871h1.768l.204-.007c1.614-.113 2.91-1.56 3.007-3.365l.006-.22-.006-.24-.05-.432-.067-.404a8.844 8.844 0 0 0-1.236-3.08 10.13 10.13 0 0 0-.802-1.096l-1.199 1.48c.154.2.298.406.43.617.483.76.81 1.563.974 2.393l.06.358.032.276.003.086-.007.22-.021.169c-.12.724-.604 1.301-1.19 1.38l-.138.01h-1.77l-.247.008c-1.14.079-2.192.702-2.847 1.7a4.145 4.145 0 0 0-.574 3.156l.068.273.037.13.028.154a.993.993 0 0 1-.118.588.58.58 0 0 1-.248.247l-.07.021-.67.134-.549.085a12.6 12.6 0 0 1-1.657.11 12.18 12.18 0 0 1-3.961-.647 10.426 10.426 0 0 1-3.19-1.734c-.9-.729-1.606-1.57-2.096-2.5a6.38 6.38 0 0 1-.75-2.984c0-1.037.254-2.06.755-3.034.495-.963 1.206-1.839 2.11-2.6A10.494 10.494 0 0 1 7.99 5.235a11.42 11.42 0 0 1 3.41-.677l.538-.01.496.01c1.153.048 2.281.264 3.338.633l1.236-1.526Z"
      fill="currentColor"></path>
    <path
      d="M6.875 14.466a1.377 1.377 0 0 0-1.374-1.374 1.375 1.375 0 0 0 0 2.747c.758 0 1.374-.616 1.374-1.373ZM8.124 9.47a1.375 1.375 0 0 0-2.748 0 1.374 1.374 0 1 0 2.748 0Zm5.246-1.874a1.374 1.374 0 1 0-2.747-.001 1.374 1.374 0 0 0 2.747 0Z"
      fill="currentColor"></path>
  </svg>
);

export const IconFlow = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M6 21.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5c1.585 0 2.924 1.054 3.355 2.5H15v-2h2V9.242L14.757 7H9V9H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15L21 15v6h-6v-2H9.355c-.43 1.446-1.77 2.5-3.355 2.5zm0-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm13 .5h-2v2h2v-2zM18 4.586L16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z" />
  </svg>
);

export const IconHeading1 = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z" />
  </svg>
);

export const IconHeading2 = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z" />
  </svg>
);

export const IconHeading3 = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
  </svg>
);

export const IconHeading4 = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22zm-2 3.133L17.19 16H20v-4.867z" />
  </svg>
);

export const IconColumns = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M11 5H5v14h6V5zm2 0v14h6V5h-6zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
  </svg>
);

export const IconSyncBlock = buildIcon(
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z" />
  </svg>
);
