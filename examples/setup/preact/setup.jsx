import preact from "preact";
import { setup } from "../common/index.jsx";

export const setupRender = () => {
  global.jsx = preact.h;
  return (view, element) => preact.render(view, element, element.lastElementChild);
};

export const setupApp = () => setup(setupRender());
