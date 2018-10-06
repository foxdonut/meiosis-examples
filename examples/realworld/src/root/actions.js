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
    ([articles, tags]) => update(O(articles, tags))
  )

  const loadArticle = slug => Promise.all([
    articlesApi.getSingle(slug),
    articlesApi.getComments(slug)
  ]).then(
    ([articleDetail, comments]) => update({ articleDetail: O(articleDetail, comments) })
  )

  const navigateToHome = () => {
    update({ pageId: HomePage })
    loadArticles()
  }
  const navigateToLogin = () => {
    update({ pageId: LoginPage })
  }
  const navigateToRegister = () => {
    update({ pageId: RegisterPage })
  }
  const navigateToArticleDetail = ({ slug }) => {
    update({ pageId: ArticleDetailPage })
    loadArticle(slug)
  }
  const navigateToArticleEdit = () => {
    update({ pageId: ArticleEditPage })
  }
  const navigateToSettings = () => {
    update({ pageId: SettingsPage })
  }

  createRouter({
    "/": navigateToHome,
    "/login": navigateToLogin,
    "/register": navigateToRegister,
    "/article/:slug": navigateToArticleDetail,
    "/editor": navigateToArticleEdit,
    "/settings": navigateToSettings
  })

  return {
    getUrl: () => "#/FIXME",

    navigateToArticleDetail,
    navigateToArticleEdit,
    navigateToHome,
    navigateToLogin,
    navigateToRegister,
    navigateToSettings,
  }
}
