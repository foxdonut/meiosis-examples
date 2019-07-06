import { createRouteSegments } from "meiosis-routing/state"

export const Route = createRouteSegments([
  "Home",
  "Login",
  "Register",
  "ArticleCreate",
  "Settings",
  "Profile"
])

/*
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

export const parseUrl = (hash = document.location.hash || "#/") => {
  const [url, queryString] = hash.substring(1).split("?")
  const route = Route.matchOr(() => Route.of.Home(), url)
  const query = queryString ? m.parseQueryString(queryString) : {}
  return { route, query }
}

export const getUrl = (route, query) => {
  let result = Route.toURL(route)
  if (query && Object.keys(query).length > 0) {
    result += "?" + m.buildQueryString(query)
  }
  return prefix + result
}

export const listenToRouteChanges = navigate => (window.onpopstate = () => navigate(parseUrl()))

export const router = {
  service: state => {
    const url = getUrl(state.route, state.query)
    if (document.location.hash !== url) {
      window.history.pushState({}, "", url)
    }
  }
}
const routeMappings = {
  "/": () => ({ pageId: HomePage, articles: null }),
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
