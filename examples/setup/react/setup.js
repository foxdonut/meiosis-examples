import ReactDOM from "react-dom";
import React from "react";
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
  const args = [node.tag, node.attrs || {}].concat(node.children || []);
  return React.createElement.apply(null, args);
});

export const setupRender = () =>
  (view, element) => ReactDOM.render(h(view), element);

export const setupApp = () => setup(setupRender());
