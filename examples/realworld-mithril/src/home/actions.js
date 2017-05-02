import { mergeAll } from "ramda";

import { articlesApi } from "../services";

const articlesFilter = {
  limit: 10,
  offset: 0,
  tagFilter: ""
};

export const createActions = update => ({
  globalFeed: () => {
    articlesApi.getList(articlesFilter).then(
      articles => update(model => mergeAll([model, articles, { articlesFilter }]))
    );
  }
});
