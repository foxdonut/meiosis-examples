import flyd from "flyd";
import ReactDOM from "react-dom";

import { page } from "./page";
import { router } from "./router";
/*
import { articleDetail } from "./articleDetail";
import { profile } from "./profile";
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
  page: "",
  profile: {},
  register: {},
  tags: []
};

const update = flyd.stream();
const models = flyd.scan(applyUpdate, initialModel, update);

router.create(update);

const element = document.getElementById("app");
const view = page.create(update);
models.map(model => ReactDOM.render(view(model), element));

/*
const Layout = layout.create(models, update);
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
