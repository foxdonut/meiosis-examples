import flyd from "flyd"
import O from "patchinko/overloaded"
import { sv } from "seview"
import m from "mithril"
import { createApp } from "./app"
import { HomePage } from "./util/constants"
/*
import { articleDetail } from "./articleDetail"
import { articleEdit } from "./articleEdit"
import { page } from "./page"
import { layout } from "./layout"
import { login } from "./login"
import { profile } from "./profile"
import { register } from "./register"
import { settings } from "./settings"
import { initServices } from "./services"
import { credentialsApi } from "realworld-common/src/services"
import { nestComponent, viewModel } from "./util"

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import { trace } from "meiosis"

initServices()
*/

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key]
      delete attrs[key]
      attrs[key.toLowerCase()] = value
    }
  })
  return attrs
}

const h = sv(node =>
  (typeof node === "string")
    ? { tag: "#", children: node }
    : node.attrs && node.attrs.innerHTML
      ? m(node.tag, m.trust(node.attrs.innerHTML))
      : m(node.tag, processAttrs(node.attrs), node.children || [])
)

export const render = element => view => m.render(element, h(view))

//credentialsApi.getUser().then(user => {
const initialModel = {
  article: {},
  articles: [],
  articlesFilter: {
    limit: 10,
    offset: 0,
    tagFilter: ""
  },
  login: {},
  pageId: HomePage,
  profile: {},
  register: {},
  //user,
  user: null,
  tags: []
}

const update = flyd.stream()
const models = flyd.scan(O, initialModel, update)
//const viewModels = models.map(viewModel)

/*
  m.route(stub, "/", {
    "/": merge({
      onmatch: pageActions.homePage
    }, noRender),
    "/article/:slug": merge({
      onmatch: params => pageActions.articleDetailPage(params.slug)
    }, noRender),
    "/editor": merge({
      onmatch: pageActions.articleEditPage
    }, noRender),
    "/editor/:slug": {
      onmatch: params => ArticleDetail.init(params.slug).then(() => update(
        model => assocPath(["article", "tags"], model.article.tagList.join(" "), model)
      )),
      render: () => m(Layout, { component: ArticleEdit, page: "articleEdit" })
    },
    "/login": merge({
      onmatch: pageActions.loginPage
    }, noRender),
    "/profile/:username": {
      onmatch: params => Profile.init(params.username, false),
      render: () => m(Layout, { component: Profile, favorites: false })
    },
    "/profile/:username/favorites": {
      onmatch: params => Profile.init(params.username, true),
      render: () => m(Layout, { component: Profile, favorites: true })
    },
    "/register": merge({
      onmatch: pageActions.registerPage
    }, noRender),
    "/settings": merge({
      onmatch: pageActions.settingsPage
    }, noRender)
  })
*/

const app = createApp(update)
//viewModels.map(model => m.render(element, view(model)))
models.map(app.view).map(render(document.getElementById("app")))

// Only for development, to use the Meiosis Tracer as a Chrome extension.
//trace({ update, dataStreams: [ models, viewModels ] })
//})
