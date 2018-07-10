import { render } from "inferno";
import { h as hyper } from "inferno-hyperscript";
import { setup } from "../common";
import { sv } from "seview";

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key === "htmlFor") {
      const value = attrs[key];
      delete attrs[key];
      attrs["for"] = value;
    }
    else if (attrs.innerHTML) {
      attrs.dangerouslySetInnerHTML = { __html: attrs.innerHTML };
      delete attrs.innerHTML;
    }
  })
  return attrs;
};

const h = sv(node =>
  (typeof node === "string")
  ? node
  : hyper(node.tag, processAttrs(node.attrs), node.children || [])
);

export const setupRender = () =>
  (view, element) => render(h(view), element);

export const setupApp = () => setup(setupRender());
