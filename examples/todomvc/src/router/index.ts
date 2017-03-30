// NOTE: this is not used in the Mithril version.

import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";
import * as _ from "lodash";
import { Model, State } from "../util";

export const extractRoute = (hash: string) => (hash && hash.substring(1)) || "/";

// Function to trigger a route change. Set the route on the model, and parse the route
// to trigger route handling.
export const triggerRouteChange = (update: Function, route: string) => {
  update((model: Model) => _.set(model, "route", route));
  crossroads.parse(route);
};

export const createRouter = (update: Function) => {
  const history = createHistory();

  // Unmatched route. Redirect to #/.
  crossroads.addRoute(/^.*$/, () => {
    window.location.replace("#/");
  }, 0);

  // Listen for route changes.
  history.listen(location => {
    const route: string = extractRoute(location.hash);
    triggerRouteChange(update, route);
  });

  // Initial route.
  crossroads.parse(extractRoute(window.location.hash));

  return {
    extractRoute
  }
};
