const LocationBar = require("location-bar");

function initRoutes(): void {
  const root = "/examples/library";
  const locationBar = new LocationBar();

  locationBar.onChange(function(path: string) {
    console.log("new path:", path);
  });

  locationBar.start({
    root
  });
}

export { initRoutes };
