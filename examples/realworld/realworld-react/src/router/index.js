import crossroads from "crossroads";
import createHistory from "history/createBrowserHistory";
import { assoc, compose, flip, merge, mergeAll, path } from "ramda";

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
      console.log("route: #/")
      articlesApi.getList(articlesFilter).
        then(articles => update(model => mergeAll([model, articles, { articlesFilter }]))).
        then(() => popularTagsApi.get()).
        then(popularTags => update(compose(assoc("page", "Home"), assoc("tags", popularTags.tags))));
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
    crossroads.addRoute(/^.*$/, () => {
      console.log("unmatched route")
      history.replace("#/");
    });

    // Listen for route changes.
    history.listen(location => {
      console.log("change:", location);
      if (!path(["state", "sync"], location)) {
        console.log("parse:", location.hash);
        crossroads.parse(location.hash);
      }
      else {
        console.log("sync only")
      }
    });

    // Sync route with page.
    const syncRoute = model => {
      const page = model.page;
      console.log("page:", page);
      const route = routeMap[page];
      console.log("route:", route, "hash:", window.location.hash);
      if (window.location.hash !== route) {
        console.log("sync route")
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
