import createHistory from "history/createBrowserHistory";
import * as crossroads from "crossroads";
import { Stream } from "meiosis";

import * as model from "./model";
import * as actions from "./actions";

const extractRoute = (hash: string) => (hash && hash.substring(2)) || "";

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

  const state = (state: any) => {
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
