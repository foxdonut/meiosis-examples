import { assoc, mergeAll } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  page: (filter, pageNumber) => evt => {
    evt.preventDefault();
    const articlesFilter = assoc("offset", (pageNumber - 1) * filter.limit, filter);
    articlesApi.getList(articlesFilter).then(
      articles => update(model => mergeAll([model, articles, { articlesFilter }]))
    );
  }
});
