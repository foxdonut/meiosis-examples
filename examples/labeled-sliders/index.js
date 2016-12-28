import { on, run } from "meiosis";
import snabbdom from "snabbdom";
import Type from "union-type";
import { component, view } from "./sliderContainer";

Type.check = false;

const model = run({ initialModel: { }, components: [ component ] }).model;

const patch = snabbdom.init([
  require("snabbdom/modules/attributes"),
  require("snabbdom/modules/class"),
  require("snabbdom/modules/eventlisteners"),
  require("snabbdom/modules/props"),
  require("snabbdom/modules/style")
]);

let vnode = document.getElementById("app");
on(model => vnode = patch(vnode, view(model)), model);
