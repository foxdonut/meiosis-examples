import { h, patch } from "picodom";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxPicodom = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupRender = () => {
  global.jsx = jsxPicodom(h);
  let el = null;
  return (view, element) => patch(el, (el = view), element);
};

export const setupApp = () => setup(setupRender());
