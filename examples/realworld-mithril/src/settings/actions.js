import m from "mithril";
import { assoc } from "ramda";

import { setToken } from "../services";

export const createActions = update => ({
  logout: evt => {
    evt.preventDefault();
    setToken("");
    update(model => assoc("user", {}, model));
    m.route.set("/");
  }
});
