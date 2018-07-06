import m from "mithril";
import { setup } from "../common/index.jsx";
import { jsx } from "../common/jsx";

const jsxMithril = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupRender = () => {
  global.jsx = jsxMithril(m);
  return (view, element) => m.render(element, view);
};

export const setupApp = () => setup(setupRender());
