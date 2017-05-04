import { mergeAll } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  globalFeed: articlesFilter => {
    articlesApi.getList(articlesFilter).then(
      articles => update(model => mergeAll([model, articles, { articlesFilter }]))
    );
  }
});
