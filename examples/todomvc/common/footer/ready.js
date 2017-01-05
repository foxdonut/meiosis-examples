import createHistory from "history/createBrowserHistory";
import { createFooterActions } from "./actions";

export const footerReady = propose => {
  const footerActions = createFooterActions(propose);

  const history = createHistory();

  history.listen(function(location) {
    const route = location.hash.split("/")[1] || "all";
    footerActions.filter(route);
  });
};
