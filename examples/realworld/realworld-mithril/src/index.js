import m from "mithril";
import stream from "mithril/stream";
import { assoc, assocPath, merge } from "ramda";

import { articleDetail } from "./articleDetail";
import { articleEdit } from "./articleEdit";
import { page } from "./page";
import { home } from "./home";
import { layout } from "./layout";
import { login } from "./login";
import { profile } from "./profile";
import { register } from "./register";
import { settings } from "./settings";
import { credentialsApi } from "./services";
import { nestComponent, viewModel } from "./util";

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import { trace } from "meiosis";

credentialsApi.getUser().then(user => {
  const applyUpdate = (model, modelUpdate) => modelUpdate(model);

  const initialModel = {
    article: {},
    articles: [],
    articlesFilter: {
      limit: 10,
      offset: 0,
      tagFilter: ""
    },
    login: {},
    page: "Home",
    profile: {},
    register: {},
    user,
    tags: []
  };

  const update = stream();
  const models = stream.scan(applyUpdate, initialModel, update);
  const viewModels = models.map(viewModel);

  const Layout = layout.create(viewModels, update);
  //const Home = home.create(update);
  const Register = register.create(update);
  const Login = login.create(update);
  const Profile = profile.create(update);
  const Settings = settings.create(update);
  const ArticleDetail = articleDetail.create(update);
  const ArticleEdit = nestComponent(articleEdit.create, update, ["article"]);

  const pageActions = page.createActions(update);

  m.route.prefix("#");

  const stub = document.createElement("div");
  const noRender = { render: () => null };

  m.route(stub, "/", {
    "/": merge({
      onmatch: pageActions.homePage
    }, noRender),
    "/article/:slug": merge({
      onmatch: params => ArticleDetail.init(params.slug)
    }, noRender),
    "/editor": {
      onmatch: () => update(model => assoc("article", articleEdit.model(), model)),
      render: () => m(Layout, { component: ArticleEdit, page: "articleEdit" })
    },
    "/editor/:slug": {
      onmatch: params => ArticleDetail.init(params.slug).then(() => update(
        model => assocPath(["article", "tags"], model.article.tagList.join(" "), model)
      )),
      render: () => m(Layout, { component: ArticleEdit, page: "articleEdit" })
    },
    "/login": {
      render: () => m(Layout, { component: Login, page: "login" })
    },
    "/profile/:username": {
      onmatch: params => Profile.init(params.username, false),
      render: () => m(Layout, { component: Profile, favorites: false })
    },
    "/profile/:username/favorites": {
      onmatch: params => Profile.init(params.username, true),
      render: () => m(Layout, { component: Profile, favorites: true })
    },
    "/register": {
      render: () => m(Layout, { component: Register, page: "register" })
    },
    "/settings": {
      render: () => m(Layout, { component: Settings, page: "settings" })
    }
  });

  const element = document.getElementById("app");
  const view = page.create(update);
  viewModels.map(model => m.render(element, view(model)));

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  trace({ update, dataStreams: [ models, viewModels ] });
  //viewModels.map(m.redraw);
});
