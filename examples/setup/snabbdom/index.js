const snabbdom = require("snabbdom");
import { html } from 'snabbdom-jsx';
import { setup } from "../common";
import { jsxSnabbdom } from "../common/jsx";

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default,
  require("snabbdom/modules/class").default,
  require("snabbdom/modules/eventlisteners").default,
  require("snabbdom/modules/props").default,
  require("snabbdom/modules/style").default
]);

window.jsx = jsxSnabbdom(html);

let el = null;
setup((view, element) => {
  if (!el) {
    el = element;
  }
  el = patch(el, view);
});
