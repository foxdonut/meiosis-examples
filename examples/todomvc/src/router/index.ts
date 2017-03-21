import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";
import { Model, State } from "../util";

export const extractRoute = (hash: string) => (hash && hash.substring(2)) || "";

// Function to trigger a route change. Set the route on the model, and parse the route
// to trigger route handling.
export const triggerRouteChange = (update: Function, route: string) => {
  update((model: Model) => {
    model.route = route;
    return model;
  });

  crossroads.parse(route);
};

export const createRouter = (update: Function) => {
  const history = createHistory();

  // Unmatched route. Redirect to #/.
  crossroads.addRoute(/^.*$/, () => {
    window.location.replace("#/");
  }, 0);

  // Listen for route changes. Ignore changes that are just for syncing.
  history.listen(location => {
    if (!(location.state && location.state.sync)) {
      const route: string = extractRoute(location.hash);
      triggerRouteChange(update, route);
    }
  });

  // Initial route.
  crossroads.parse(extractRoute(window.location.hash));

  // After every state change, check state.route against the current window location.
  // If they don't match, set the route on the location bar. Indicate that this is
  // just for syncing so that we don't end up in an endless loop.
  const state = (state: State) => {
    const route = extractRoute(window.location.hash);

    if (state.route !== route) {
      history.push("#/" + state.route, { sync: true});
    }
    return state;
  }

  return {
    extractRoute,
    state
  }
};
