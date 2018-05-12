import _ from "lodash";

import { articlesApi, popularTagsApi } from "../services";

export const createActions = update => ({
  loadPopularTags: () => popularTagsApi.get().then(
    popularTags => update(model => _.set(model, "tags", popularTags.tags))
  ),

  tagFilter: tag => evt => {
    evt.preventDefault();
    articlesApi.getList({ tag, limit: 10 }).then(
      articles => update(model => _.merge(model, { tagFilter: tag }, articles))
    );
  }
});
