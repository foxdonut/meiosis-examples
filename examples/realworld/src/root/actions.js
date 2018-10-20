import O from "patchinko/constant"

import { articlesApi, popularTagsApi } from "../services"

export const actions = ({ update }) => {
  const loadArticles = params => update(model => Promise.all([
    articlesApi.getList(Object.assign(model.articlesFilter, params)),
    popularTagsApi.getList()
  ]).then(
    ([articles, tags]) => update(Object.assign(articles, tags,
      { articlesFilter: O(params), loading: false }))
  ))

  // FIXME: do actions call update or just return patches?
  const loadArticle = ({ slug }) => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(
    ([articleDetail, comments]) =>
      update({ articleDetail: Object.assign(articleDetail, comments), loading: false })
  )

  return {
    loadArticles,
    loadArticle
  }
}
