import React from "react";

import { merge } from "./util";

export const bookDetails = {
  page: {
    id: "BookDetails",
    tab: "Books"
  },
  create: _update => model => model.params.id ?
    (<p>Details of book {model.params.id}</p>) : null,
  display: (update, params) => update(merge({ page: bookDetails.page, params }))
};
