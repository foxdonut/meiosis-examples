import m from "mithril";
import stream from "mithril/stream";

import { articleDetail } from "./articleDetail";
import { home } from "./home";
import { layout } from "./layout";
import { login } from "./login";
import { profile } from "./profile";
import { register } from "./register";
import { viewModel } from "./util";

const applyUpdate = (model, modelUpdate) => modelUpdate(model);

const initialModel = {
  articles: [],
  articlesFilter: {
  },
  login: {},
  pager: {
    limit: 10,
    offset: 0
  },
  register: {},
  tags: []
};

const update = stream();
const models = stream.scan(applyUpdate, initialModel, update);
const viewModels = models.map(viewModel);

const Layout = layout.create(viewModels, update);
const Home = home.create(update);
const Register = register.create(update);
const Login = login.create(update);
const Profile = profile.create(update);
const ArticleDetail = articleDetail.create(update);

m.route.prefix("#");

const element = document.getElementById("app");
m.route(element, "/", {
  "/": {
    onmatch: () => Home.init(),
    render: () => m(Layout, { component: Home, page: "home" })
  },
  "/article/:slug": {
    onmatch: params => ArticleDetail.init(params.slug),
    render: () => m(Layout, { component: ArticleDetail })
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
  }
});

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models, viewModels ] });
viewModels.map(m.redraw);
