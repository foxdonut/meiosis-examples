import { assoc, compose, flip, merge, mergeAll } from "ramda";

import { articlesApi, popularTagsApi } from "../services";

// FIXME: localstorage
const articlesFilter = {
  limit: 10,
  offset: 0,
  tagFilter: ""
};

export const createActions = update => ({
  homePage: () => {
    articlesApi.getList(articlesFilter).
      then(articles => update(model => mergeAll([model, articles, { articlesFilter, page: "Home" }]))).
      then(() => popularTagsApi.get()).
      then(popularTags => update(assoc("tags", popularTags.tags)));
  },

  loginPage: () => update(assoc("page", "Login")),

  articleDetailPage: slug => {
    articlesApi.getSingle(slug).
      then(compose(update, flip(merge))).
      then(() => articlesApi.getComments(slug).then(compose(update, flip(merge)))).
      then(() => update(assoc("page", "ArticleDetail")));
  }
});
