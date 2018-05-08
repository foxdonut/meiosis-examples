import { render } from "inferno";
import { createElement } from "inferno-create-element";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxInferno = jsx({
  "htmlFor": "for"
});

export const setupRender = () => {
  global.jsx = jsxInferno(createElement);
  return render;
};

export const setupApp = () => setup(setupRender());
