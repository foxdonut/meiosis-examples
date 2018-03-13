import { h, patch } from "ultradom";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxUltradom = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupRender = () => {
  global.jsx = jsxUltradom(h);
  return (view, element) => patch(view, element);
};

export const setupApp = () => setup(setupRender());
