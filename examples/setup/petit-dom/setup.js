import { h, mount, patch } from "petit-dom";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxPetitDom = jsx({
  "onChange": "onchange",
  "onClick": "onclick",
  "onInput": "oninput"
});

export const setupRender = () => {
  global.jsx = jsxPetitDom(h);

  let vnode = null;

  return (view, element) => {
    if (!vnode) {
      element.appendChild(mount(view));
    }
    else {
      patch(view, vnode);
    }
    vnode = view;
  };
};

export const setupApp = () => setup(setupRender());
