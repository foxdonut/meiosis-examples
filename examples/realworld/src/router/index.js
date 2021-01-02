import { createRouter } from "meiosis-router-setup"
import createRouteMatcher from "feather-route-matcher"
import queryString from "query-string"
import { selectors } from "../selectors"

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

const routeMatcher = createRouteMatcher(routeConfig)
const convertMatchToRoute = ({ value, params, queryParams }) => ({
  page: value,
  params,
  queryParams
})

export const router = createRouter({
  routeMatcher,
  convertMatchToRoute,
  routeConfig,
  queryString
})

export const toRoutePatch = route => ({ route: () => route, routeChanged: true })
export const routeTo = (page, params, queryParams) =>
  toRoutePatch(selectors.toRoute(page, params, queryParams))
