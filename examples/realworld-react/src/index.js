import flyd from "flyd";
import ReactDOM from "react-dom";

import { layout } from "./layout";
import { home } from "./home";
/*
import { articleDetail } from "./articleDetail";
import { login } from "./login";
import { profile } from "./profile";
import { register } from "./register";
*/

const applyUpdate = (model, modelUpdate) => modelUpdate(model);

const initialModel = {
  articles: [],
  articlesFilter: {
    limit: 10,
    offset: 0,
    tagFilter: ""
  },
  login: {},
  profile: {},
  register: {},
  tags: []
};

const update = flyd.stream();
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const Home = home.create(update);
const Layout = layout.create(update);
const view = model => Layout({ model, Component: Home });
models.map(model => ReactDOM.render(view(model), element));

/*
const Layout = layout.create(models, update);
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
*/

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models ] });
