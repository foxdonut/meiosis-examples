import { init } from "snabbdom";
import { VNode } from "snabbdom/vnode";
import attributes from "snabbdom/modules/attributes";
import classModule from "snabbdom/modules/class";
import eventlisteners from "snabbdom/modules/eventlisteners";
import props from "snabbdom/modules/props";
import { startApp } from "./index";
import { view } from "./app/view-snabbdom";

const patch = init([
  attributes,
  classModule,
  eventlisteners,
  props
]);

let currentView: VNode = null;

const render = (element: Element, nextView: VNode) => {
  if (currentView === null) {
    patch(element, nextView);
  }
  else {
    patch(currentView, nextView);
  }
  currentView = nextView;
};

startApp(view, render);
