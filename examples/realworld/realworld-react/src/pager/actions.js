import _ from "lodash";

import { articlesApi } from "../services";

export const createActions = update => ({
  page: (filter, pageNumber) => evt => {
    evt.preventDefault();
    const articlesFilter = _.set(filter, "offset", (pageNumber - 1) * filter.limit);
    articlesApi.getList(articlesFilter).then(
      articles => update(model => _.merge(model, articles, { articlesFilter }))
    );
  }
});
