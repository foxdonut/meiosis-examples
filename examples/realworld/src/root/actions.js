import O from "patchinko/constant"

import { articlesApi, popularTagsApi } from "../services"
import { createRouter } from "../util/router"
import { ArticleDetailPage, ArticleEditPage, HomePage, LoginPage, RegisterPage,
  SettingsPage } from "../util/constants"

export const actions = ({ update }) => {
  const loadArticles = params => Promise.all([
    articlesApi.getList(params),
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

  const defaultNavigateTo = update

  const navigateToHome = obj =>
    loadArticles().then(data => update(O(obj, data)))

  const navigateToLogin = obj =>
    update(O(obj, { login: {} }))

  const navigateToRegister = obj =>
    update(O(obj, { register: {} }))

  const navigateToArticleDetail = obj =>
    loadArticle(obj.params.slug).then(data => update(O(obj, data)))

  const router = createRouter([
    { route: "/", handler: navigateToHome, pageId: HomePage },
    { route: "/login", handler: navigateToLogin, pageId: LoginPage },
    { route: "/register", handler: navigateToRegister, pageId: RegisterPage },
    { route: "/article/:slug", handler: navigateToArticleDetail, pageId: ArticleDetailPage },
    { route: "/editor", handler: defaultNavigateTo, pageId: ArticleEditPage },
    { route: "/settings", handler: defaultNavigateTo, pageId: SettingsPage }
  ])

  return {
    getUrl: router.getUrl,
    navigateTo: router.navigateTo,
    loadArticles
  }
}
