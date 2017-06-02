import * as crossroads from "crossroads";
import { Location } from "history";
import createHistory from "history/createBrowserHistory";
import * as _ from "lodash";
import { UpdateFunction } from "meiosis";
import { Model, State } from "../util";

const extractRoute = (hash: string) => (hash && hash.substring(1)) || "/";

// Function to trigger a route change. Set the route on the model, and parse the route
// to trigger route handling.
const triggerRouteChange = (update: UpdateFunction, route: string) => {
  update((model: Model) => _.set(model, "route", route));
  crossroads.parse(route);
};

export const router = {
  create: (update: UpdateFunction) => {
    const history = createHistory();

    // Unmatched route. Redirect to #/.
    crossroads.addRoute(/^.*$/, () => {
      window.location.replace("#/");
    }, 0);

    // Listen for route changes.
    history.listen((location: Location) => {
      const route: string = extractRoute(location.hash);
      triggerRouteChange(update, route);
    });

    // Initial route.
    crossroads.parse(extractRoute(window.location.hash));

    // Listen for components triggering route changes.
    //events.onRouteChange.map((route: string) => triggerRouteChange(update, route));
  }
};
