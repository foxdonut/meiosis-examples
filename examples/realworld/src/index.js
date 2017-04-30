import m from "mithril";
import stream from "mithril/stream";

import { app } from "./app";
import { articleDetail } from "./articleDetail";
import { home } from "./home";
import { layout } from "./layout";
import { login } from "./login";
import { profile } from "./profile";
import { register } from "./register";

const applyUpdate = (model, modelUpdate) => modelUpdate(model);

const initialModel = app.model();

const update = stream();
const models = stream.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
//const view = app.create(update);
//models.map(model => m.render(element, view(model)));

const Layout = layout.create(models, update);
const Home = home.create(update);
const Register = register.create(update);
const Login = login.create(update);
const Profile = profile.create(update);
const ArticleDetail = articleDetail.create(update);

m.route.prefix("#");

m.route(element, "/", {
  "/": {
    render: () => m(Layout, { component: Home })
  },
  "/article/:slug": {
    onmatch: params => ArticleDetail.init(params.slug),
    render: () => m(Layout, { component: ArticleDetail })
  },
  "/login": {
    render: () => m(Layout, { component: Login })
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
    render: () => m(Layout, { component: Register })
  }
});

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models ] });
models.map(m.redraw);
