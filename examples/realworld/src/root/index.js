import { HomePage, LoginPage, RegisterPage, ArticleDetailPage, ArticleEditPage, SettingsPage }
  from "../util/constants"

import { actions } from "./actions"
import { state } from "./state"
import { Header, Footer } from "../layout"
import { Home } from "../home"
import { Register } from "../register"
import { Login } from "../login"
import { ArticleDetail } from "../articleDetail"
import { ArticleEdit } from "../articleEdit"
import { Settings } from "../settings"
//import { Navigator } from "../navigator"

/*
const routeMappings = [
  { pageId: HomePage, route: "/" },
  { pageId: RegisterPage, route: "/register" },
  { pageId: LoginPage, route: "/login" },
  { pageId: ArticleDetailPage, route: "/article/:slug" },
  { pageId: ArticleEditPage, route: "/editor" },
  { pageId: SettingsPage, route: "/settings" }
]
*/

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
  model: ({ user }) => ({
    pageId: HomePage,
    articleDetail: {},
    articleEdit: {},
    login: {},
    register: {},
    user
  }),
  //actions: ({ update }) => Object.assign(actions({ update }), Navigator.actions(routeMappings)({ update })),
  actions,
  state,
  view: components => model => {
    const { header, footer } = components
    const component = components[model.pageId]

    return ["div",
      header(model),
      component(model),
      footer(model)
    ]
  }
}
