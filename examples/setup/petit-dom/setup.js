import { h as hyper, mount, patch } from "petit-dom";
import { setup } from "../common";
import { sv } from "seview";

const attrMappings = {
  "className": "class",
  "htmlFor": "for"
};

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key];
      delete attrs[key];
      attrs[key.toLowerCase()] = value;
    }
    else {
      const to = attrMappings[key];
      if (to) {
        const value = attrs[key];
        delete attrs[key];
        attrs[to] = value;
      }
    }
  });
  return attrs;
};

const h = sv(node =>
  (typeof node === "string")
  ? node
  : hyper(node.tag, processAttrs(node.attrs), node.children || [])
);

export const setupRender = () => {
  let vnode = null;

  return (view, element) => {
    const node = h(view)
    if (!vnode) {
      element.appendChild(mount(node));
    }
    else {
      patch(node, vnode);
    }
    vnode = node;
  };
};

export const setupApp = () => setup(setupRender());
