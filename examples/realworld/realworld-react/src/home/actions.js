import _ from "lodash";

import { articlesApi } from "../services";

export const createActions = update => ({
  globalFeed: articlesFilter => {
    articlesApi.getList(articlesFilter).then(
      articles => update(model => _.merge(model, articles, { articlesFilter }))
    );
  }
});
