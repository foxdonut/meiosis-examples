import { h, patch } from "picodom";
import { setup } from "../common";
import { jsxPicodom } from "../common/jsx";

window.jsx = jsxPicodom(h);
let el = null;
setup((view, element) => (el = patch(el, view, element)));
