import { createRouter } from "../meiosis/router"

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

export const router = createRouter(routeConfig)

export const navigateTo = route => ({ route: () => route })
export const routeTo = (page, params = {}) => navigateTo(router.getRoute(page, params))

/*
you can also npm install meiosis-router-setup and use it as shown below:

import { createFeatherRouter } from "meiosis-router-setup";
export const router = createFeatherRouter({ createRouteMatcher, queryString, routeConfig });

See https://meiosis.js.org/router for details.
*/
