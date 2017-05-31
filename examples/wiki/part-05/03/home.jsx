import React from "react";

import { assoc } from "./util";

export const home = {
  page: {
    id: "Home",
    tab: "Home"
  },
  create: _update => _model => (<div>Home Page</div>),
  display: update => update(assoc("page", home.page))
};
