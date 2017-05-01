import { mergeAll } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  globalFeed: pager => {
    articlesApi.getList(pager).then(
      articles => update(model => mergeAll([ model, articles, { tagFilter: "" } ]))
    );
  }
});
