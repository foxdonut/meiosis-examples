import createHistory from "history/createBrowserHistory";
import { actions } from "./actions";

export const ready = () => {
  const history = createHistory();

  history.listen(function(location) {
    const route = location.hash.split("/")[1] || "all";
    actions.filter(route);
  });
};
