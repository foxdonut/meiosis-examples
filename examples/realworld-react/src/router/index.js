import crossroads from "crossroads";
import createHistory from "history/createBrowserHistory";
import { assoc } from "ramda";

const extractRoute = hash => (hash && hash.substring(1)) || "/";

export const router = {
  create: update => {
    const history = createHistory();

    crossroads.addRoute("/", () => update(assoc("page", "Home")));
    crossroads.addRoute("/login", () => update(assoc("page", "Login")));
    crossroads.addRoute("/register", () => update(assoc("page", "Register")));

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
