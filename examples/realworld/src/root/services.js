import O from "patchinko/constant"

import { articlesApi, popularTagsApi, profileApi } from "../services"

export const services = {
  loadArticles: (model, params) => Promise.all([
    articlesApi.getList(Object.assign(model.articlesFilter, params)),
    popularTagsApi.getList()
  ]).then(
    ([articles, tags]) => Object.assign(articles, tags,
      { articlesFilter: O(params) })
  ),

  loadArticle: ({ slug }) => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(
    ([articleDetail, comments]) =>
      ({ articleDetail: Object.assign(articleDetail, comments) })
  ),

  loadProfile: ({ username }) => profileApi.get(username)
}
