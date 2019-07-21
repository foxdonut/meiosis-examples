import { Actions, accept, createRouteSegments } from "meiosis-routing/state"

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

/*
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
