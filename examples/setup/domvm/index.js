import domvm from "domvm";
import { setup } from "../common";
import { jsx } from "../common/jsx";

export const jsxDomvm = jsx({
  "className": "class",
  "htmlFor": "for",
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

window.jsx = jsxDomvm(domvm.defineElement);

const { models, view, element } = setup(() => null);

const AppView = () => (vm, model) => view(model);

const vm = domvm.createView(AppView, models());
vm.mount(element);
models.map(model => vm.update(model));
