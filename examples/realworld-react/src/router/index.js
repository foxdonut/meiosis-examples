import crossroads from "crossroads";
import createHistory from "history/createBrowserHistory";
import { assoc, compose, flip, merge, mergeAll } from "ramda";

import { articlesApi, popularTagsApi } from "../services";

const extractRoute = hash => (hash && hash.substring(1)) || "/";

const articlesFilter = {
  limit: 10,
  offset: 0,
  tagFilter: ""
};

export const router = {
  create: update => {
    const history = createHistory();

    crossroads.addRoute("/", () => {
      articlesApi.getList(articlesFilter).
        then(articles => update(model => mergeAll([model, articles, { articlesFilter }]))).
        then(() => popularTagsApi.get()).
        then(popularTags => update(compose(assoc("page", "Home"), assoc("tags", popularTags.tags))));
      });

    crossroads.addRoute("/login", () => update(assoc("page", "Login")));
    crossroads.addRoute("/register", () => update(assoc("page", "Register")));

    crossroads.addRoute("/article/{slug}", slug => {
      articlesApi.getSingle(slug).
        then(compose(update, flip(merge))).
        then(() => articlesApi.getComments(slug).then(compose(update, flip(merge)))).
        then(() => update(assoc("page", "ArticleDetail")));
    });

    // Unmatched route. Redirect to #/.
    crossroads.addRoute(/^.*$/, () => {
      window.location.replace("#/");
    });

    // Listen for route changes.
    history.listen(location => {
      const route = extractRoute(location.hash);
      crossroads.parse(route);
    });

    // Initial route.
    crossroads.parse(extractRoute(window.location.hash));
  }
};
