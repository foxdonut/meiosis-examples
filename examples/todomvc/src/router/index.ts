const Mapper = require("url-mapper");
import * as _ from "lodash";
import { Model } from "../util";

export const createRouter = (actions: any) => {
  const extractRoute = (hash: string) => (hash && hash.substring(1)) || "/";

  const urlMapper = Mapper();

  const routes = {
    "/": () => actions.filter(""),
    "/active": () => actions.filter("active"),
    "/completed": () => actions.filter("completed")
  };

  const resolveRoute = (route: string) => {
    const resolved = urlMapper.map(route, routes);
    if (resolved) {
      const action = resolved.match;
      action();
    }
  };

  // Listen for route changes.
  window.onpopstate = () => {
    const route: string = extractRoute(document.location.hash);
    resolveRoute(route);
  };

  // Initial route.
  resolveRoute(extractRoute(window.location.hash));

  const routeSync = (model: Model) => {
    const route = "/" + model.filterBy;
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { routeSync };
};
