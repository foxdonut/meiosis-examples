import { h, render } from "ultradom";
import { setup } from "../common/index.jsx";
import { jsx } from "../common/jsx";

const jsxUltradom = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupRender = () => {
  global.jsx = jsxUltradom(h);
  return render;
};

export const setupApp = () => setup(setupRender());
