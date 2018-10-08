import O from "patchinko/constant"

import { articlesApi, popularTagsApi } from "../services"
import { createRouter } from "../util/router"
import { ArticleDetailPage, ArticleEditPage, HomePage, LoginPage, RegisterPage,
  SettingsPage } from "../util/constants"

export const actions = ({ update }) => {
  const loadArticles = () => Promise.all([
    articlesApi.getList(),
    popularTagsApi.getList()
  ]).then(
    ([articles, tags]) => O(articles, tags)
  )

  const loadArticle = slug => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(
    ([articleDetail, comments]) => ({ articleDetail: O(articleDetail, comments) })
  )

  const defaultNavigateTo = obj => update(obj)

  const navigateToHome = obj =>
    loadArticles().then(data => update(O(obj, data)))

  const navigateToArticleDetail = obj =>
    loadArticle(obj.params.slug).then(data => update(O(obj, data)))

  const router = createRouter([
    { route: "/", handler: navigateToHome, pageId: HomePage },
    { route: "/login", handler: defaultNavigateTo, pageId: LoginPage },
    { route: "/register", handler: defaultNavigateTo, pageId: RegisterPage },
    { route: "/article/:slug", handler: navigateToArticleDetail, pageId: ArticleDetailPage },
    { route: "/editor", handler: defaultNavigateTo, pageId: ArticleEditPage },
    { route: "/settings", handler: defaultNavigateTo, pageId: SettingsPage }
  ])

  return {
    getUrl: router.getUrl,
    navigateTo: router.navigateTo
  }
}
