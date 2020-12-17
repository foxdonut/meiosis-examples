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

/*
Instead of meiosis/router.js,
you can also npm install meiosis-router-setup and use it as shown below:

import createRouteMatcher from "feather-route-matcher";
import { createRouter } from "meiosis-router-setup";
import queryString from "query-string";
import { selectors } from "../state";

const routeMatcher = createRouteMatcher(routeConfig);

export const router = createRouter({
  routeMatcher,
  routeConfig,
  fromRoute: selectors.fromRoute,
  queryString
});

See https://meiosis.js.org/router for details.
*/
export const router = createRouter(routeConfig)

export const toRoutePatch = route => ({ route: () => route, routeChanged: true })
export const routeTo = (page, params = {}) => toRoutePatch(router.toRoute(page, params))
