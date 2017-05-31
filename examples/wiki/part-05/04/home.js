import m from "mithril";

import { assoc } from "./util";

export const home = {
  page: {
    id: "Home",
    tab: "Home"
  },
  create: _update => _model => m("div", "Home Page"),
  display: update => update(assoc("page", home.page))
};
