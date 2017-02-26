import createHistory from "history/createBrowserHistory";
import crossroads from "crossroads";
import * as model from "./model";
import * as actions from "./actions";

const extractRoute = hash => (hash && hash.substring(2)) || "";

export const createRouter = () => {
  const history = createHistory();
  crossroads.addRoute(/^.*$/, () => {
  }, 0);

  history.listen(function(location) {
    if (!(location.state && location.state.sync)) {
      const route = extractRoute(location.hash);
      actions.actions.route(route);
      crossroads.parse(route);
    }
  });

  const state = state => {
    const route = extractRoute(window.location.hash);
    if (state.route !== route) {
      history.push("#/" + state.route, { sync: true });
    }
    return state;
  };

  return {
    ...model,
    ...actions,
    state,
    extractRoute
  };
};
