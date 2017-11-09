import { h, patch } from "picodom";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxPicodom = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupApp = () => {
  global.jsx = jsxPicodom(h);
  let el = null;
  return setup((view, element) => patch(el, (el = view), element));
};
