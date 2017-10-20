import domvm from "domvm";
import { setup } from "../common";
import { jsxDomvm } from "../common/jsx";

window.jsx = jsxDomvm(domvm.defineElement);

let vm = null;
setup((view, element) => {
  const f = () => () => view;
  if (!vm) {
    vm = domvm.createView(f, {});
    vm.mount(element, true);
  }
  else {
    vm.update({});
  }
});
