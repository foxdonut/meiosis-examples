import preact from "preact";
import { setup } from "../common";
import { jsxPreact } from "../common/jsx";

window.jsx = jsxPreact(preact.h);
setup((view, element) => preact.render(view, element, element.lastElementChild));
