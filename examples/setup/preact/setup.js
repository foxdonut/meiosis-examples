import preact from "preact";
import { setup } from "../common";
const { mapKeys, sv } = require("seview");

const h = sv(mapKeys({
  tag: "nodeName",
  attrs: "attributes",
  children: "children"
}))

export const setupRender = () => {
  return (view, element) => {
    console.log(JSON.stringify(h(view), null, 4));
    preact.render(h(view), element, element.lastElementChild);
  };
  // return (view, element) => preact.render(h(view), element, element.lastElementChild);
};

export const setupApp = () => setup(setupRender());
