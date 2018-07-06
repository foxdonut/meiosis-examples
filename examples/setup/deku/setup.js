import { createApp, element } from "deku";
import { setup } from "../common";
import { sv } from "seview";

const attrMappings = {
  "className": "class",
  "htmlFor": "for"
};

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    const to = attrMappings[key];
    if (to) {
      const value = attrs[key];
      delete attrs[key];
      attrs[to] = value;
    }
  });
  return attrs;
};

const h = sv(node =>
  (typeof node === "string")
  ? node
  : element(node.tag, processAttrs(node.attrs), node.children || [])
);

export const setupRender = () => {
  let render = null;

  return (view, el) => {
    if (!render) {
      render = createApp(el);
    }
    render(h(view));
  };
};

export const setupApp = () => setup(setupRender());
