import m from "mithril";
import pathToRegexp from "path-to-regexp";

import { pages } from "./navigation";

export const createRouter = navigation => {
  m.route.prefix("#");

  const noRender = () => null;

  const createRouteResolver = resolved => ({
    onmatch: params => resolved.action(params),
    render: noRender
  });

  const stub = document.createElement("div");

  const routes = {
    "/": { id: pages.home.id, action: navigation.navigateToHome },
    "/coffee": { id: pages.coffee.id, action: navigation.navigateToCoffee },
    "/coffee/:id": { id: pages.coffee.id, action: navigation.navigateToCoffee },
    "/beer": { id: pages.beer.id, action: navigation.navigateToBeer },
    "/beer/:id": { id: pages.beerDetails.id, action: navigation.navigateToBeerDetails }
  };

  const routeResolvers = Object.keys(routes).reduce((result, next) => {
    result[next] = createRouteResolver(routes[next]);
    return result;
  }, {});

  m.route(stub, "/", routeResolvers);

  const routeMap = Object.keys(routes).reduce((result, next) => {
    result[routes[next].id] = next;
    return result;
  }, {});

  // Workaround for Mithril not supporting optional parameters
  routeMap[pages.coffee.id] = "/coffee/:id?";

  const routeSync = model => {
    const segment = routeMap[model.page.id] || "/";
    const route = pathToRegexp.compile(segment)(model.params || {});
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { routeSync };
};
