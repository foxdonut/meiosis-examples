import { h, mount, patch } from "petit-dom";
import { setup } from "../common";
import { jsxPetitDom } from "../common/jsx";

window.jsx = jsxPetitDom(h);

let vnode = null;

setup((view, element) => {
  if (!vnode) {
    element.appendChild(mount(view));
  }
  else {
    patch(view, vnode);
  }
  vnode = view;
});
