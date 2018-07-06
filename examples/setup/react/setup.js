import ReactDOM from "react-dom";
import React from "react";
import { setup } from "../common";
import { sv } from "seview";

const h = sv(node => {
  if (typeof node === "string") {
    return node;
  }
  const args = [node.tag, node.attrs || {}];
  if (node.children) {
    node.children.forEach(child => args.push(child))
  }
  return React.createElement.apply(null, args);
});

export const setupRender = () =>
  (view, element) => ReactDOM.render(h(view), element);

export const setupApp = () => setup(setupRender());
