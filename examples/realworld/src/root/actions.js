import O from "patchinko/constant"

import { articlesApi, popularTagsApi } from "../services"

export const actions = ({ update }) => ({
  loadArticles: () => Promise.all([
    articlesApi.getList(),
    popularTagsApi.get()
  ]).then(
    ([articles, tags]) => update(O(articles, tags))
  ),

  loadArticle: slug => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(
    ([articleDetail, comments]) => update({ articleDetail: O(articleDetail, comments) })
  )

  ,getUrl: () => "#/FIXME"
})

/*
import { HomePage } from "../home"
import { ArticleDetailPage } from "../articleDetail"
import { get } from "../util/fp"

const checkNavigatingToHome = (actions, model) => {
  const navigateTo = get(model, ["navigateTo", "pageId"])
  //FIXME
  if (navigateTo !== model.pageId && navigateTo === HomePage) {
    actions.loadArticles()
  }
}

const checkNavigatingToArticleDetail = (actions, model) => {
  const navigateTo = get(model, ["navigateTo", "pageId"])
  if (navigateTo !== model.pageId && navigateTo === ArticleDetailPage) {
    const slug = get(model, ["navigateTo", "params", "slug"])
    actions.loadArticle(slug)
  }
}

export const nextAction = actions => model => {
  checkNavigatingToHome(actions, model)
  checkNavigatingToArticleDetail(actions, model)
}
*/
