import { mergeAll } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  globalFeed: evt => {
    evt && evt.preventDefault();
    articlesApi.getList({ limit: 10 }).then(
      articles => update(model => mergeAll([ model, articles, { tagFilter: "" } ]))
    );
  }
});
