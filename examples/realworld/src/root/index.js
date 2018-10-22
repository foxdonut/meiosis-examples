import { HomePage, LoginPage, RegisterPage, ArticleDetailPage, ArticleEditPage,
  SettingsPage, ProfilePage }
  from "../util/router"

import { verify } from "./verify"
import { model } from "./model"
import { state } from "./state"
import { view } from "./view"
import { nextAction } from "./nextAction"
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
    [RegisterPage]: Register,
    [LoginPage]: Login,
    [ArticleDetailPage]: ArticleDetail,
    [ArticleEditPage]: ArticleEdit,
    [SettingsPage]: Settings,
    [ProfilePage]: Profile
  },
  verify,
  model,
  state,
  view,
  nextAction
}
