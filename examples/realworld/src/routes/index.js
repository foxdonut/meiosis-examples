import { Actions, accept, createRouteSegments } from "meiosis-routing/state"

export { navigateTo } from "meiosis-routing/state"

export const Route = createRouteSegments([
  "Home",
  "Login",
  "Register",
  "ArticleCreate",
  "ArticleEdit",
  "Settings",
  "Profile",
  "ProfileFavorites"
])

export const routeConfig = {
  Home: "/?tag",
  Login: "/login",
  Register: "/register",
  ArticleCreate: "/editor",
  ArticleEdit: "/editor/:slug",
  Settings: "/settings",
  Profile: "/profile/:username",
  ProfileFavorites: "/profile/:username/favorites"
}

export const routes = {
  Actions,
  accept
}

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
