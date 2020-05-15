import { createRouter } from "../meiosis/router"
import { compose } from "../util/fp"

export const Route = {
  Home: "Home",
  Login: "Login",
  Register: "Register",
  ArticleDetail: "ArticleDetail",
  ArticleCreate: "ArticleCreate",
  ArticleEdit: "ArticleEdit",
  Settings: "Settings",
  Profile: "Profile",
  ProfileFavorites: "ProfileFavorites"
}

const routeConfig = {
  "/": Route.Home,
  "/login": Route.Login,
  "/register": Route.Register,
  "/article/:slug": Route.ArticleDetail,
  "/editor": Route.ArticleCreate,
  "/editor/:slug": Route.ArticleEdit,
  "/settings": Route.Settings,
  "/profile/:username": Route.Profile,
  "/profile/:username/favorites": Route.ProfileFavorites
}

/*
you can also npm install meiosis-router-setup and use it as shown below:

import { createFeatherRouter } from "meiosis-router-setup";
export const router = createFeatherRouter({ createRouteMatcher, queryString, routeConfig });

See https://meiosis.js.org/router for details.
*/
export const router = createRouter(routeConfig)

export const navigateTo = route => ({ route: () => route, routeChanged: true })
export const routeTo = compose(navigateTo, router.getRoute)

export const routerService = state => {
  if (state.routeChanged) {
    return { routeChanged: false }
  }
}
