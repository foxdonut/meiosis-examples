import { HomePage, FeedPage, LoginPage, RegisterPage, ArticleDetailPage, ArticleCreatePage,
  ArticleEditPage, SettingsPage, ProfilePage }
  from "../util/router"

import { accept } from "./accept"
import { model } from "./model"
import { service } from "./service"
import { view } from "./view"
import { Header, Footer } from "../layout"
import { Home } from "../home"
import { Register } from "../register"
import { Login } from "../login"
import { ArticleDetail } from "../articleDetail"
import { ArticleEdit } from "../articleEdit"
import { Settings } from "../settings"
import { Profile } from "../profile"

export const Root = {
  dependencies: {
    header: Header,
    footer: Footer,
    [HomePage]: Home,
    [FeedPage]: Home,
    [RegisterPage]: Register,
    [LoginPage]: Login,
    [ArticleDetailPage]: ArticleDetail,
    [ArticleCreatePage]: ArticleEdit,
    [ArticleEditPage]: ArticleEdit,
    [SettingsPage]: Settings,
    [ProfilePage]: Profile
  },
  accept,
  model,
  service,
  view
}
