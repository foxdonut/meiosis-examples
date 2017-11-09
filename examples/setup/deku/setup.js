import { createApp, element } from "deku";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxDeku = jsx({
  "className": "class",
  "htmlFor": "for"
});

global.jsx = jsxDeku(element);

let render = null;
export const setupApp = () => setup((view, el) => {
  if (!render) {
    render = createApp(el);
  }
  render(view);
});
