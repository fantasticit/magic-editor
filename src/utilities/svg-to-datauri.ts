function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}

export function svgToDataURI(svg) {
  if (!svg) return "";

  let encoded = svg.replace(/\s+/g, " ");
  encoded = replaceAll(encoded, "%", "%25");
  encoded = replaceAll(encoded, "> <", "><");
  encoded = replaceAll(encoded, "; }", ";}");
  encoded = replaceAll(encoded, "<", "%3c");
  encoded = replaceAll(encoded, ">", "%3e");
  encoded = replaceAll(encoded, '"', "'");
  encoded = replaceAll(encoded, "#", "%23");
  encoded = replaceAll(encoded, "{", "%7b");
  encoded = replaceAll(encoded, "}", "%7d");
  encoded = replaceAll(encoded, "|", "%7c");
  encoded = replaceAll(encoded, "^", "%5e");
  encoded = replaceAll(encoded, "`", "%60");
  encoded = replaceAll(encoded, "@", "%40");

  const uri = `data:image/svg+xml;charset=UTF-8,${encoded}`;

  return uri;
}
