import { assoc, compose, flip, merge, mergeAll } from "ramda";

import { articlesApi, popularTagsApi } from "../services";

// FIXME: localstorage
const articlesFilter = {
  limit: 10,
  offset: 0,
  tagFilter: ""
};

export const createActions = update => ({
  homePage: () => Promise.all([
    articlesApi.getList(articlesFilter),
    popularTagsApi.get()
  ]).then(results => update(
    model => mergeAll([model, results[0], { tags: results[1].tags, articlesFilter, page: "Home" }])
  )),

  loginPage: () => update(assoc("page", "Login")),

  articleDetailPage: slug => {
    articlesApi.getSingle(slug).
      then(compose(update, flip(merge))).
      then(() => articlesApi.getComments(slug).then(compose(update, flip(merge)))).
      then(() => update(assoc("page", "ArticleDetail")));
  }
});
