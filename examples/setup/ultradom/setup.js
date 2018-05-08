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
  return patch;
};

export const setupApp = () => setup(setupRender());
