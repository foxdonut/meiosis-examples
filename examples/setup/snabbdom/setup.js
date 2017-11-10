const snabbdom = require("snabbdom");
import { html } from "snabbdom-jsx";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxSnabbdom = jsx({
  "onChange": "on-change",
  "onClick": "on-click",
  "onInput": "on-input"
});

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default,
  require("snabbdom/modules/class").default,
  require("snabbdom/modules/eventlisteners").default,
  require("snabbdom/modules/props").default,
  require("snabbdom/modules/style").default
]);

export const setupRender = () => {
  global.jsx = jsxSnabbdom(html);

  let el = null;

  return (view, element) => {
    if (!el) {
      el = document.createElement("div");
      element.appendChild(el);
    }
    el = patch(el, view);
  };
};

export const setupApp = () => setup(setupRender());
