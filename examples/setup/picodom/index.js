import { h, patch } from "picodom";
import { setup } from "../common";
import { jsxPicodom } from "../common/jsx";

window.jsx = jsxPicodom(h);
let el = null;
setup((view, element) => patch(el, (el = view), element));
