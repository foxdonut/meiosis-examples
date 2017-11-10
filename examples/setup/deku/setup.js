import { createApp, element } from "deku";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxDeku = jsx({
  "className": "class",
  "htmlFor": "for"
});

export const setupRender = () => {
  global.jsx = jsxDeku(element);
  let render = null;

  return (view, el) => {
    if (!render) {
      render = createApp(el);
    }
    render(view);
  };
};

export const setupApp = () => setup(setupRender());
