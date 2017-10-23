import m from "mithril";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxMithril = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

window.jsx = jsxMithril(m);

setup((view, element) => m.render(element, view));
