import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";
import { Model } from "../util";

const extractRoute = (hash: string) => (hash && hash.substring(2)) || "";

export const createRouter = (update: Function) => {
  const history = createHistory();

  // Unmatched route. Redirect to #/.
  crossroads.addRoute(/^.*$/, () => {
    window.location.replace("#/");
  }, 0);

  // Store route in model for reference.
  crossroads.routed.add((route: string, data: any) => {
    update((model: Model) => {
      model.route = route;
      return model;
    });
  });

  // Listen for route changes
  history.listen(location => crossroads.parse(extractRoute(location.hash)));

  // Initial route
  crossroads.parse(extractRoute(window.location.hash));
};
