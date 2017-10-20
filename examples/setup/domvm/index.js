import domvm from "domvm";
import { setup } from "../common";
import { jsxDomvm } from "../common/jsx";

window.jsx = jsxDomvm(domvm.defineElement);

const { models, view, element } = setup(() => null);

function AppView() {
  return function(vm, model) {
    return view(model);
  };
}

const vm = domvm.createView(AppView, models());
vm.mount(element);
models.map(model => vm.update(model));
