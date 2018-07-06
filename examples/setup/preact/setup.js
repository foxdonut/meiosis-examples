import preact from "preact";
import { setup } from "../common";
const { mapKeys, sv } = require("seview");

const h = sv(mapKeys({
  tag: "nodeName",
  attrs: "attributes",
  children: "children"
}))

export const setupRender = () =>
  (view, element) => preact.render(h(view), element, element.lastElementChild);

export const setupApp = () => setup(setupRender());
