import { h as hyper, render } from "dio.js";
import { setup } from "../common";
import { sv } from "seview";

const h = sv(node =>
  (typeof node === "string")
  ? node
  : hyper(node.tag, node.attrs || {}, node.children || [])
);

export const setupRender = () =>
  (view, element) => render(h(view), element);

export const setupApp = () => setup(setupRender());
