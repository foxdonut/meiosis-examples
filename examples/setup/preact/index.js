import preact from "preact";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxPreact = jsx({ });
window.jsx = jsxPreact(preact.h);
setup((view, element) => preact.render(view, element, element.lastElementChild));
