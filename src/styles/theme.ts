const colors = {
  text: "rgba(0, 0, 0, .85)",
  background: "#fff",
  primary: "#0064fa",
  greyLight: "#F4F7FA",
  grey: "#E8EBED",
  greyMid: "#C5CCD3",
  greyDark: "#DAE1E9"
};

export const base = {
  ...colors,

  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
  fontFamilyMono:
    "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",

  borderColor: "#dee0e3",
  borderRadius: "2px",
  boxShadow: "rgb(0 0 0/10%) 0 0 10px",

  horizontalRule: "#dee0e3",

  bubbleMenuBoxshadow: "rgb(0 0 0/10%) 0 0 10px",

  codeBlockBorderColor: "#dee0e3",

  blockquoteBorderColor: "#bbbfc5",
  blockquoteTextColor: "#1f2329b3",

  tableBorderColor: "#c1c7d0",
  tableHeaderBgColor: "#f4f5f7",
  tableSelectedBorderColor: "#0065ff",
  tableSelectedCellBgColor: "#e8f2ff",
  tableSelectedControlBgColor: "#2584ff",
  tableResizeHandleBgColor: "#adf",

  slashMenuColor: "rgba(0, 0, 0, 0.85)",
  slashMenuTitleColor: "rgba(0, 0, 0, 0.45)",
  slashMenuBoxshadow: "rgb(0 0 0/10%) 0 0 10px",
  slashMenuHoverBgColor: "rgb(46 50 56 / 5%)"
};

export const light = {
  ...base
};

export const dark = {
  ...base
};

export default light;
