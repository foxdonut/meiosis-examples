import preact from "preact";
import { setup } from "../common";

export const setupApp = () => {
  global.jsx = preact.h;
  return setup((view, element) => preact.render(view, element, element.lastElementChild));
};
