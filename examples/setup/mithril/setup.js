import m from "mithril";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxMithril = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

global.jsx = jsxMithril(m);

export const setupApp = () => setup((view, element) => m.render(element, view));
