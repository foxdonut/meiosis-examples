import m from "mithril";

import { merge } from "./util";

export const itemDetails = {
  page: {
    id: "ItemDetails",
    tab: "Items"
  },
  create: _update => model => model.params.id ?
    m("p", "Details of item " + model.params.id) : null,
  display: (update, params) => update(merge({ page: itemDetails.page, params }))
};
