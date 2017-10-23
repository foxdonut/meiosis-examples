import { h, patch } from "picodom";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxPicodom = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

window.jsx = jsxPicodom(h);
let el = null;
setup((view, element) => patch(el, (el = view), element));
