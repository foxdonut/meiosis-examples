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
    { path: "/beer", children: [
      { path: "", name: pages.beer.id, action: wrap(navigation.navigateToBeer) },
      { path: "/:id", name: pages.beerDetails.id, action: wrap(navigation.navigateToBeerDetails) }
    ]},
    { path: "/brewery", children: [
      { path: "/:breweryId?", children: [
        { path: "", name: pages.brewery.id, action: wrap(navigation.navigateToBrewery) },
        { path: "/:beerId", name: pages.breweryDetails.id, action: wrap(navigation.navigateToBreweryBeerDetails) }
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
    const route = urlGenerator(model.page.id, model.params || {});
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { resolveRoute, routeSync };
};
