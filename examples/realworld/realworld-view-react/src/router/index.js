import crossroads from "crossroads";
import createHistory from "history/createBrowserHistory";
import { assoc, path, unless } from "ramda";

import { page } from "../page";

const routeMap = {
  Home: "#/",
  Register: "#/register",
  Login: "#/login"
};

export const router = {
  create: update => {
    const history = createHistory();
    const pageActions = page.createActions(update);

    crossroads.addRoute("#/", pageActions.homePage);
    crossroads.addRoute("#/register", () => update(assoc("page", "Register")));
    crossroads.addRoute("#/login", () => update(assoc("page", "Login")));
    crossroads.addRoute("#/article/{slug}", pageActions.articleDetailPage)

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
