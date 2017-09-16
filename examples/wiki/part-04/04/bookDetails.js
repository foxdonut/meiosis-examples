import m from "mithril";

import { merge } from "./util";

export const bookDetails = {
  page: {
    id: "BookDetails",
    tab: "Books"
  },
  create: _update => model => model.params.id ?
    m("p", "Details of book " + model.params.id) : null,
  display: (update, params) => update(merge({ page: bookDetails.page, params }))
};
