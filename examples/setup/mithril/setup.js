import m from "mithril";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxMithril = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupApp = () => {
  global.jsx = jsxMithril(m);
  return setup((view, element) => m.render(element, view));
};
