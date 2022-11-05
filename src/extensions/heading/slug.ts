import { Node } from "prosemirror-model";
import escape from "lodash.escape";
import slugify from "slugify";

function safeSlugify(text: string) {
  return `h-${escape(
    slugify(text, {
      remove: /[!"#$%&'\.()*+,\/:;<=>?@\[\]\\^_`{|}~]/g,
      lower: true
    })
  )}`;
}

export default function headingToSlug(node: Node, index = 0) {
  const slugified = safeSlugify(node.textContent);
  if (index === 0) return slugified;
  return `${slugified}-${index}`;
}

export function headingToPersistenceKey(node: Node, id?: string) {
  const slug = headingToSlug(node);
  return `rme-${id || window?.location.pathname}–${slug}`;
}
