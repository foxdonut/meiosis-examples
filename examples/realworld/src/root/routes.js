import { HomePage, LoginPage, RegisterPage, ArticleDetailPage, ArticleEditPage, SettingsPage }
  from "../util/constants"

import { createNavigator } from "../navigator"

export const Routes = {
  const navigator = createNavigator(update)

  navigator.register([
    { pageId: HomePage, route: "/" },
    { pageId: RegisterPage, route: "/register" },
    { pageId: LoginPage, route: "/login" },
    { pageId: ArticleDetailPage, route: "/article/:slug" },
    { pageId: ArticleEditPage, route: "/editor" },
    { pageId: SettingsPage, route: "/settings" }
  ], createNotFound({ navigator, update }))

  navigator.start()

  return navigator
}
