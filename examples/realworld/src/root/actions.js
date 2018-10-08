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

  const navigateToHome = () =>
    loadArticles().then(data => update(O({ pageId: HomePage }, data)))

  const navigateToLogin = () => update({ pageId: LoginPage })
  const navigateToRegister = () => update({ pageId: RegisterPage })

  const navigateToArticleDetail = ({ slug }) =>
    loadArticle(slug).then(data => update(O({ pageId: ArticleDetailPage }, data)))

  const navigateToArticleEdit = () => update({ pageId: ArticleEditPage })
  const navigateToSettings = () => update({ pageId: SettingsPage })

  const router = createRouter([
    { route: "/", handler: navigateToHome, pageId: HomePage },
    { route: "/login", handler: navigateToLogin, pageId: LoginPage },
    { route: "/register", handler: navigateToRegister, pageId: RegisterPage },
    { route: "/article/:slug", handler: navigateToArticleDetail, pageId: ArticleDetailPage },
    { route: "/editor", handler: navigateToArticleEdit, pageId: ArticleEditPage },
    { route: "/settings", handler: navigateToSettings, pageId: SettingsPage }
  ])

  return {
    getUrl: router.getUrl,

    navigateToArticleDetail,
    navigateToArticleEdit,
    navigateToHome,
    navigateToLogin,
    navigateToRegister,
    navigateToSettings,
  }
}
