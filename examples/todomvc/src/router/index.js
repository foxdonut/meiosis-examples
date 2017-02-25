import createHistory from "history/createBrowserHistory";
import * as model from "./model";
import * as actions from "./actions";

const extractRoute = hash => (hash && hash.substring(2)) || "";

export const createRouter = () => {
  const history = createHistory();

  history.listen(function(location) {
    if (!(location.state && location.state.sync)) {
      const route = extractRoute(location.hash);
      actions.actions.route(route);
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
