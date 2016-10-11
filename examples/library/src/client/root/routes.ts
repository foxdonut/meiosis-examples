const LocationBar = require("location-bar");
const createHistory = require("history").createBrowserHistory;

function initRoutes(): void {
  const root = "/examples/library";
  /*
  const locationBar = new LocationBar();

  locationBar.onChange(function(path: string) {
    console.log("new path:", path);
  });

  locationBar.start({
    root
  });
  */

  const rootPath = "/examples/library";

  const history = createHistory({
    basename: rootPath/*,
    getUserConfirmation: function(message: string, callback: any) {
      console.log("Are you sure?");
      return callback(window.confirm("Are you sure?"));
    }*/
  });

/*
  history.block(function(location: string, action: any) {
    return "Confirm leaving?";
  });
  */

  history.listen(function(location: string, action: any) {
    console.log("new location:", location, "action:", action);
  });

  console.log("initial location:", window.location.pathname.substring(rootPath.length));
}

export { initRoutes };
