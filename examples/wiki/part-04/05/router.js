import m from "mithril";
import pathToRegexp from "path-to-regexp";

import { home } from "./home";
import { coffee } from "./coffee";
import { books } from "./books";
import { bookSummary } from "./bookSummary";
import { bookDetails } from "./bookDetails";

export const createRouter = update => {
  m.route.prefix("#");

  const noRender = () => null;

  const createRouteResolver = component => ({
    onmatch: params => component.display(update, params),
    render: noRender
  });

  const stub = document.createElement("div");

  const routes = {
    "/": home,
    "/coffee": coffee,
    "/coffee/:id": coffee,
    "/books": books,
    "/books/:id": bookSummary,
    "/books/:id/details": bookDetails
  };

  const routeResolvers = Object.keys(routes).reduce((acc, next) => {
    acc[next] = createRouteResolver(routes[next]);
    return acc;
  }, {});

  m.route(stub, "/", routeResolvers);

  const routeMap = Object.keys(routes).reduce((acc, next) => {
    acc[routes[next].page.id] = next;
    return acc;
  }, {});

  // Workaround for Mithril not supporting optional parameters
  routeMap[coffee.page.id] = "/coffee/:id?";

  const routeSync = model => {
    const segment = routeMap[model.page.id] || "/";
    const route = pathToRegexp.compile(segment)(model.params || {});
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { routeSync };
};
