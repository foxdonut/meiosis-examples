import { HomePage, LoginPage, RegisterPage, ArticleDetailPage, ArticleEditPage, SettingsPage }
  from "../util/router"

import { verify } from "./verify"
import { model } from "./model"
import { actions } from "./actions"
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

export const Root = {
  dependencies: {
    header: Header,
    footer: Footer,
    [HomePage]: Home,
    [RegisterPage]: Register,
    [LoginPage]: Login,
    [ArticleDetailPage]: ArticleDetail,
    [ArticleEditPage]: ArticleEdit,
    [SettingsPage]: Settings
  },
  verify,
  model,
  actions,
  state,
  view,
  nextAction
}
