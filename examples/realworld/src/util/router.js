//import Mapper from "url-mapper"
import superouter from "superouter"
import m from "mithril"
import O from "patchinko/constant"

//import { assoc } from "./fp"

export const HomePage = "HomePage"
export const LoginPage = "LoginPage"
export const RegisterPage = "RegisterPage"
export const ArticleDetailPage = "ArticleDetailPage"
export const ArticleCreatePage = "ArticleCreatePage"
export const ArticleEditPage = "ArticleEditPage"
export const SettingsPage = "SettingsPage"
export const ProfilePage = "ProfilePage"
export const ProfileFavoritesPage = "ProfileFavoritesPage"

const prefix = "#"

/*
const routeMappings = {
  "/": () => ({ pageId: HomePage, articles: null }),
  "/login": () => ({ pageId: LoginPage, login: {} }),
  "/register": () => ({ pageId: RegisterPage, register: {} }),
  "/article/:slug": () => ({ pageId: ArticleDetailPage, article: null }),
  "/editor/:slug": () => ({ pageId: ArticleEditPage, article: null }),
  "/editor": () => ({ pageId: ArticleCreatePage,
    article: { title: "", description: "", body: "", tags: "" }
  }),
  "/settings": () => ({ pageId: SettingsPage }),
  "/profile/:username": () => ({ pageId: ProfilePage, profile: null, feed: false }),
  "/profile/:username/favorites": () => ({ pageId: ProfileFavoritesPage, profile: null, feed: false })
}
*/

export const Route = superouter.type("Route", {
  Home: "/",
  Login: "/login",
  Register: "/register",
  ArticleDetail: "/article/:slug",
  ArticleEdit: "/editor/:slug",
  ArticleCreate: "/editor",
  Settings: "/settings",
  Profile: "/profile/:username",
  ProfileFavorites: "/profile/:username/favorites"
})

const createPatchFn = obj => params => Object.assign(obj, { params })

const getPatch = Route.fold({
  Home: createPatchFn({ pageId: HomePage, articles: null }),
  Login: createPatchFn({ pageId: LoginPage, login: {} }),
  Register: createPatchFn({ pageId: RegisterPage, register: {} }),
  ArticleDetail: createPatchFn({ pageId: ArticleDetailPage, article: null }),
  ArticleEdit: createPatchFn({ pageId: ArticleEditPage, article: null }),
  ArticleCreate: createPatchFn({ pageId: ArticleCreatePage,
    article: { title: "", description: "", body: "", tags: "" }
  }),
  Settings: createPatchFn({ pageId: SettingsPage }),
  Profile: createPatchFn({ pageId: ProfilePage, profile: null, feed: false }),
  ProfileFavorites: createPatchFn({ pageId: ProfileFavoritesPage, profile: null, feed: false })
})

//const urlMapper = Mapper({ query: true })

/*
const routeLookup = Object.keys(routeMappings).reduce((result, key) =>
  assoc(routeMappings[key]().pageId, key, result), {})
*/

/*
export const parseUrl = (url = document.location.hash || "#/") => {
  const mapped = urlMapper.map(url.substring(1), routeMappings)
  if (mapped) {
    const patch = mapped.match
    return Object.assign({}, patch(), { url, params: mapped.values })
  }
}
*/

export const parseUrl = (hash = document.location.hash || "#/") => {
  const [ url, queryString ] = hash.substring(1).split("?")
  const route = Route.matchOr(() => Route.of.Home(), url)
  const patch = getPatch(route)
  const query = queryString
    ? m.parseQueryString(queryString)
    : {}
  return O({}, patch, { url: hash, params: O(query) })
}

/*
export const getUrl = (id, params = {}) => {
  const route = routeLookup[id] || "/"
  const result = urlMapper.stringify(route, params)
  return prefix + result
}
*/

export const getUrl = (route, query) => {
  let result = Route.toURL(route)
  if (query) {
    result += "?" + m.buildQueryString(query)
  }
  return prefix + result
}

export const navigateTo = (id, params, query) => parseUrl(getUrl(id, params, query))

export const listenToRouteChanges = update =>
  window.onpopstate = () => update(parseUrl())
