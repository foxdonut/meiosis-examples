import { render } from "ivi";
import * as h from "ivi-html";
// import { setup } from "../common";
// import { jsxMithril } from "../common/jsx";

// window.jsx = jsxMithril(m);

const view = h.div().children("Hello, ivi");

// setup((view, element) => m.render(element, view));
render(view, document.getElementById("app"));
