import createHistory from "history/createBrowserHistory";
import { actions } from "./actions";

export const ready = () => {
  const history = createHistory();

  history.listen(function(location) {
    const route = location.hash.split("/")[1] || "";
    actions.filter(route);
  });

  return state => {
    if (window.location.hash !== state.route) {
      history.push(state.route);
    }
    //history.replace(model.url);
    return state;
  };
};
