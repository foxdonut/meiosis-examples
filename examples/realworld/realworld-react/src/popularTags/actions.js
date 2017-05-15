import { assoc, mergeAll } from "ramda";

import { articlesApi, popularTagsApi } from "../services";

export const createActions = update => ({
  loadPopularTags: () => popularTagsApi.get().then(
    popularTags => update(model => assoc("tags", popularTags.tags, model))
  ),

  tagFilter: tag => evt => {
    evt.preventDefault();
    articlesApi.getList({ tag, limit: 10 }).then(
      articles => update(model => mergeAll([ model, { tagFilter: tag }, articles ]))
    );
  }
});
