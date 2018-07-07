import m from "mithril";
import { setup } from "../common";
import { sv } from "seview";

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key];
      delete attrs[key];
      attrs[key.toLowerCase()] = value;
    }
  })
  return attrs;
};

const h = sv(node =>
  (typeof node === "string")
  ? { tag: "#", children: node }
  : node.attrs && node.attrs.innerHTML
    ? m(node.tag, m.trust(node.attrs.innerHTML))
    : m(node.tag, processAttrs(node.attrs), node.children || [])
);

export const setupRender = () =>
  (view, element) => m.render(element, h(view));

export const setupApp = () => setup(setupRender());
