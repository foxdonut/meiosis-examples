import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";

const extractRoute = (hash: string) => (hash && hash.substring(2)) || "";

export const createRouter = () => {
  const history = createHistory();

  // Unmatched route
  crossroads.addRoute(/^.*$/, () => {
  }, 0);

  // Listen for route changes
  history.listen(location => crossroads.parse(extractRoute(location.hash)));

  // Initial route
  crossroads.parse(extractRoute(window.location.hash));
};
