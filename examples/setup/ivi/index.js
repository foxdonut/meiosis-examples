import { render } from "ivi";
//import * as h from "ivi-html";
import { setup } from "../common";
import { jsxIvi } from "../common/jsx";
import { hyperscript } from "babel-plugin-ivi-jsx/dist/hyperscript";

window.jsx = jsxIvi(hyperscript);

//const view = h.div().children("Hello, ivi league");

setup(render);
//render(view, document.getElementById("app"));

