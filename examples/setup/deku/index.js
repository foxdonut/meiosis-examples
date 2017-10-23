import { createApp, element } from "deku";
import { setup } from "../common";
import { jsx } from "../common/jsx";

const jsxDeku = jsx({
  "className": "class",
  "htmlFor": "for"
});

window.jsx = jsxDeku(element);

let render = null;
setup((view, el) => {
  if (!render) {
    render = createApp(el);
  }
  render(view);
});
