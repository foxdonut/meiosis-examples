import { Actions, accept, createRouteSegments } from "meiosis-routing/state"

import { assoc } from "../util/fp"

export { navigateTo } from "meiosis-routing/state"

export const Route = createRouteSegments([
  "Home",
  "Login",
  "Register",
  "ArticleDetail",
  "ArticleCreate",
  "ArticleEdit",
  "Settings",
  "Profile",
  "ProfileFavorites"
])

export const routeConfig = {
  Home: "/?tag&feed&offset",
  Login: "/login",
  Register: "/register",
  ArticleDetail: "/article/:slug",
  ArticleCreate: "/editor",
  ArticleEdit: "/editor/:slug",
  Settings: "/settings",
  Profile: "/profile/:username?offset",
  ProfileFavorites: "/profile/:username/favorites?offset"
}

export const routes = {
  Actions,
  accept
}

export const getArticlesFilter = route => {
  const filter = ["feed", "offset", "tag"].reduce(
    (result, param) =>
      assoc(param, route.map(segment => segment.params[param]).filter(Boolean)[0], result),
    {}
  )
  filter.offset = Number(filter.offset) || 0
  filter.limit = 10

  return filter
}
