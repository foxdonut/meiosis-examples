import O from "patchinko/constant"
import { get, asyncPipe } from "../util/fp"
import { HomePage, LoginPage, ArticleDetailPage, SettingsPage } from "../util/constants"
import { articlesApi, popularTagsApi } from "../services"
import { getNav } from "../navigator"

const checkAuthentication = model => {
  const navigateTo = get(model, ["navigateTo", "pageId"])
  if (navigateTo !== model.pageId && navigateTo === SettingsPage && !model.context.user) {
    return O(model, { navigateTo: getNav(LoginPage), returnTo: getNav(SettingsPage) })
  }
  return model
}

const checkSignIn = model => {
  const returnTo = get(model, ["returnTo"])
  if (returnTo != null && model.context.user) {
    return O(model, { navigateTo: returnTo, returnTo: O })
  }
  return model
}

const navigatingToHome = model => {
  const navigateTo = get(model, ["navigateTo", "pageId"])
  if (navigateTo !== model.pageId && navigateTo === HomePage) {
    return Promise.all([
      articlesApi.getList(),
      popularTagsApi.get()
    ]).then(
      ([articles, tags]) => O(model, articles, tags)
    )
  }
  return model
}

const navigatingToArticleDetail = model => {
  const navigateTo = get(model, ["navigateTo", "pageId"])
  if (navigateTo !== model.pageId && navigateTo === ArticleDetailPage) {
    const slug = get(model, ["navigateTo", "params", "slug"])
    return Promise.all([
      articlesApi.getSingle(slug),
      articlesApi.getComments(slug)
    ]).then(
      //FIXME: nesting
      ([articleDetail, comments]) => O(model, { articleDetail: O(articleDetail, comments) })
    )
  }
  return model
}

const navigateTo = model => O(model, model.navigateTo)

const urlInLocationBar = model => {
  // Display the url in the browser's location bar.
  const url = model.url
  if (document.location.hash !== url) {
    window.history.pushState({}, "", url)
  }
  return model
}

export const createState = () => asyncPipe(
  checkAuthentication,
  checkSignIn,
  navigatingToHome,
  navigatingToArticleDetail,
  navigateTo,
  urlInLocationBar
)
