import * as crossroads from "crossroads";
import { Location } from "history";
import createHistory from "history/createBrowserHistory";
import * as _ from "lodash";
import { UpdateFunction } from "meiosis";
import { Model, State } from "../util";

const extractRoute = (hash: string) => (hash && hash.substring(1)) || "/";

export const createRouter = (update: UpdateFunction) => {
  const history = createHistory();

  // Unmatched route. Redirect to #/.
  crossroads.addRoute(/^.*$/, () => {
    window.location.replace("#/");
  }, 0);

  // Listen for route changes.
  history.listen((location: Location) => {
    const route: string = extractRoute(location.hash);
    crossroads.parse(route);
  });

  // Initial route.
  crossroads.parse(extractRoute(window.location.hash));

  const routeSync = (model: Model) => {
    const route = "/" + model.filterBy;
    if (document.location.hash.substring(1) !== route) {
      history.push("#" + route);
    }
  };

  return { routeSync };
};
