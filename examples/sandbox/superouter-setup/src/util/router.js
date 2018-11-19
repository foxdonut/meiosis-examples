import superouter from "superouter"
import m from "mithril"
import O from "patchinko/constant"

const prefix = "#"

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

export const parseUrl = (hash = document.location.hash || "#/") => {
  const [ url, queryString ] = hash.substring(1).split("?")
  const route = Route.matchOr(() => Route.of.Home(), url)
  const patch = getPatch(route)
  const query = queryString
    ? m.parseQueryString(queryString)
    : {}
  return O({}, patch, { url: hash, params: O(query) })
}

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
