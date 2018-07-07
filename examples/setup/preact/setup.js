import preact from "preact";
import { setup } from "../common";
import { sv } from "seview";

const h = sv(node => {
  if (typeof node === "string") {
    return node;
  }
  const attrs = node.attrs || {};
  if (attrs.innerHTML) {
    attrs.dangerouslySetInnerHTML = { __html: attrs.innerHTML };
    delete attrs.innerHTML;
  }
  return preact.h(node.tag, node.attrs || {}, node.children || []);
});

export const setupRender = () =>
  (view, element) => preact.render(h(view), element, element.lastElementChild);

export const setupApp = () => setup(setupRender());
