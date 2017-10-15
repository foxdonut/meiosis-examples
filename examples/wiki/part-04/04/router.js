import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";
import { pages } from "./navigation";

export const createRouter = navigation => {
  const wrap = action => ctx => {
    action(ctx.params);
    return true;
  };

  const routes = [
    { path: "/", name: pages.home.id, action: wrap(navigation.navigateToHome) },
    { path: "/beerList", children: [
      { path: "", name: pages.beerList.id, action: wrap(navigation.navigateToBeerList) },
      { path: "/:id", name: pages.beerDetails.id, action: wrap(navigation.navigateToBeerDetails) }
    ]},
    { path: "/breweryList", children: [
      { path: "", name: pages.breweryList.id, action: wrap(navigation.navigateToBreweryList) },
      { path: "/:breweryId", children: [
        { path: "", name: pages.breweryDetails.id,
          action: wrap(navigation.navigateToBreweryDetails) },
        { path: "/beerList", children: [
          { path: "", name: pages.breweryBeerList.id,
            action: wrap(navigation.navigateToBreweryBeerList) },
          { path: "/:beerId", name: pages.breweryBeerDetails.id,
            action: wrap(navigation.navigateToBreweryBeerDetails) }
        ]}
      ]}
    ]}
  ];

  const router = new UniversalRouter(routes);

  const resolveRoute = () => {
    const route = document.location.hash.substring(1);
    router.resolve(route);
  };

  window.onpopstate = resolveRoute;

  const urlGenerator = generateUrls(router);

  const routeSync = model => {
    const route = urlGenerator(model.page.id, model.page.params || {});
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { resolveRoute, routeSync };
};
