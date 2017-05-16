import crossroads from "crossroads";
import createHistory from "history/createBrowserHistory";
import { assoc, compose, flip, merge, mergeAll, path, prop, unless } from "ramda";

import { articlesApi, popularTagsApi } from "../services";

const articlesFilter = {
  limit: 10,
  offset: 0,
  tagFilter: ""
};

const routeMap = {
  Home: "#/",
  Register: "#/register",
  Login: "#/login"
};

export const router = {
  create: update => {
    const history = createHistory();

    crossroads.addRoute("#/", () => {
      articlesApi.getList(articlesFilter).
        then(articles => update(model => mergeAll([model, articles, { articlesFilter, page: "Home" }]))).
        then(() => popularTagsApi.get()).
        then(popularTags => update(assoc("tags", popularTags.tags)));
      });

    crossroads.addRoute("#/login", () => update(assoc("page", "Login")));
    crossroads.addRoute("#/register", () => update(assoc("page", "Register")));

    crossroads.addRoute("#/article/{slug}", slug => {
      articlesApi.getSingle(slug).
        then(compose(update, flip(merge))).
        then(() => articlesApi.getComments(slug).then(compose(update, flip(merge)))).
        then(() => update(assoc("page", "ArticleDetail")));
    });

    // Unmatched route. Redirect to #/.
    crossroads.addRoute(/^.*$/, () => history.replace("#/"));

    // Listen for route changes.
    history.listen(unless(path(["state", "sync"]), location => crossroads.parse(location.hash)));

    // Sync route with page.
    const syncRoute = model => {
      const page = model.page;
      const route = routeMap[page];
      if (window.location.hash !== route) {
        history.replace(route, { sync: true });
      }
      return model;
    };

    // Initial route.
    crossroads.parse(window.location.hash);

    return {
      syncRoute
    };
  }
};
