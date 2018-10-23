import Mapper from "url-mapper"

import { assoc } from "./fp"

export const HomePage = "HomePage"
export const LoginPage = "LoginPage"
export const RegisterPage = "RegisterPage"
export const ArticleDetailPage = "ArticleDetailPage"
export const ArticleCreatePage = "ArticleCreatePage"
export const ArticleEditPage = "ArticleEditPage"
export const SettingsPage = "SettingsPage"
export const ProfilePage = "ProfilePage"

const prefix = "#"

const routeMappings = {
  "/": () => ({ pageId: HomePage, articles: null }),
  "/login": () => ({ pageId: LoginPage, login: {} }),
  "/register": () => ({ pageId: RegisterPage, register: {} }),
  "/article/:slug": () => ({ pageId: ArticleDetailPage, articleDetail: null }),
  "/editor/:slug": () => ({ pageId: ArticleEditPage, articleEdit: null }),
  "/editor": () => ({ pageId: ArticleCreatePage, articleEdit: {} }),
  "/settings": () => ({ pageId: SettingsPage }),
  "/profile/:username": () => ({ pageId: ProfilePage, profile: null })
}

const urlMapper = Mapper({ query: true })

const routeLookup = Object.keys(routeMappings).reduce((result, key) =>
  assoc(routeMappings[key]().pageId, key, result), {})

export const parseUrl = (url = document.location.hash || "#/") => {
  const mapped = urlMapper.map(url.substring(1), routeMappings)
  if (mapped) {
    const patch = mapped.match
    return Object.assign({}, patch(), { url, params: mapped.values })
  }
}

export const getUrl = (id, params = {}) => {
  const route = routeLookup[id] || "/"
  const result = urlMapper.stringify(route, params)
  return prefix + result
}

export const navigateTo = (id, params) => parseUrl(getUrl(id, params))

export const listenToRouteChanges = update =>
  window.onpopstate = () => update(parseUrl())
