import m from "mithril";
import { sv } from "seview";

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key];
      delete attrs[key];
      attrs[key.toLowerCase()] = value
    }
  })
  return attrs
}

export const h = sv(node =>
  (typeof node === "string")
  ? { tag: "#", children: node }
  : node.attrs && node.attrs.innerHTML
    ? m(node.tag, m.trust(node.attrs.innerHTML))
    : m(node.tag, processAttrs(node.attrs), node.children || [])
)
