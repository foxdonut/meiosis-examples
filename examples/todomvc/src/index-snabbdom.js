import snabbdom from "snabbdom";
import { startApp } from "./app";
import { view } from "./app/view-snabbdom";

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default,
  require("snabbdom/modules/class").default,
  require("snabbdom/modules/eventlisteners").default,
  require("snabbdom/modules/props").default
]);

let currentView = null;

const render = (element, nextView) => {
  if (currentView === null) {
    patch(element, nextView);
  }
  else {
    patch(currentView, nextView);
  }
  currentView = nextView;
};

startApp(view, render);
