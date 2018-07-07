import preact from "preact";
import { setup } from "../common";
import { mapKeys, sv } from "seview";

const mk = mapKeys({
  tag: "nodeName",
  attrs: "attributes",
  children: "children"
});

const h = sv(node => {
  const attrs = node.attrs || {};
  if (attrs.innerHTML) {
    attrs.dangerouslySetInnerHTML = { __html: attrs.innerHTML };
    delete attrs.innerHTML;
  }
  return mk(node);
})

export const setupRender = () =>
  (view, element) => preact.render(h(view), element, element.lastElementChild);

export const setupApp = () => setup(setupRender());
