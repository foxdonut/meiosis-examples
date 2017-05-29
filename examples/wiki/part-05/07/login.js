import m from "mithril";

import { assoc } from "./util";

export const login = {
  page: {
    id: "Login",
    tab: "Login"
  },
  create: _update => _model => m("div", "Login Page"),
  display: update => update(assoc("page", login.page))
};
