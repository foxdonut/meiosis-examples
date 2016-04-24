import meiosis from "meiosis";
import snabbdom from "snabbdom";
import createMain from "./labeledSliders";

const patch = snabbdom.init([
  require("snabbdom/modules/attributes"),
  require("snabbdom/modules/class"),
  require("snabbdom/modules/props"),
  require("snabbdom/modules/style"),
  require("snabbdom/modules/eventlisteners")
]);

let element = document.getElementById("app");

const render = view => element = patch(element, view);
const adapters = { render };
const Meiosis = meiosis(adapters);

createMain(Meiosis);

