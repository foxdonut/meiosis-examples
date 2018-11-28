import { render } from "inferno";
import { h as hyper } from "inferno-hyperscript";
import { setup } from "../common";
import { sv } from "seview";

const processAttrs = (attrs = {}) => {
  if (attrs.htmlFor) {
    attrs.for = attrs.htmlFor;
    delete attrs.htmlFor;
  }
  if (attrs.innerHTML) {
    attrs.dangerouslySetInnerHTML = { __html: attrs.innerHTML };
    delete attrs.innerHTML;
  }
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
