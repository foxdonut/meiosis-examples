import { createApp, element } from "deku";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxDeku = jsx({
  "className": "class",
  "htmlFor": "for"
});

export const setupApp = () => {
  global.jsx = jsxDeku(element);
  let render = null;

  return setup((view, el) => {
    if (!render) {
      render = createApp(el);
    }
    render(view);
  });
};
