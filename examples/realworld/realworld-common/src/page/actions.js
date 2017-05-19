import { assoc, mergeAll } from "ramda";

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

  articleDetailPage: slug => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(results => update(
    model => mergeAll([model, { page: "ArticleDetail" }, results[0], results[1]])
  )),

  settingsPage: () => update(assoc("page", "Settings"))
});
