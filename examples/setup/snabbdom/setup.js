const snabbdom = require("snabbdom");
import { html } from "snabbdom-jsx";
import { setup } from "../common";
import { sv } from "seview";

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key];
      delete attrs[key];
      attrs["on-" + key.toLowerCase().substring(2)] = value;
    }
  })
  return attrs;
};

const h = sv(node =>
  (typeof node === "string")
  ? node
  : html(node.tag, processAttrs(node.attrs), node.children || [])
);

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default,
  require("snabbdom/modules/class").default,
  require("snabbdom/modules/eventlisteners").default,
  require("snabbdom/modules/props").default,
  require("snabbdom/modules/style").default
]);

export const setupRender = () => {
  let el = null;

  return (view, element) => {
    if (!el) {
      el = document.createElement("div");
      element.appendChild(el);
    }
    el = patch(el, h(view));
  };
};

export const setupApp = () => setup(setupRender());
