import _ from "lodash";

import { articleEdit } from "../articleEdit";
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
    model => _.merge(model, results[0], { tags: results[1].tags, articlesFilter, page: "Home" })
  )),

  registerPage: () => update(model => _.set(model, "page", "Register")),
  loginPage: () => update(model => _.set(model, "page", "Login")),

  articleDetailPage: slug => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(results => update(
    model => _.merge(model, { page: "ArticleDetail" }, results[0], results[1])
  )),

  articleEditPage: () => update(model => {
    _.set(model, "page", "ArticleEdit");
    _.set(model, "article", articleEdit.model());
    return model;
  }),

  settingsPage: () => update(model => _.set(model, "page", "Settings"))
});
