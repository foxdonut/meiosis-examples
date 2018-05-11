import urlMapper from "url-mapper";

export const createRouter = _update => {
  const mapper = urlMapper();

  const routes = {
    "/": { id: null, action: null },
    "/register": { id: null, action: null },
    "/login": { id: null, action: null },
    "/article/:slug": { id: null, action: null }
  };

  const resolveRoute = () => {
    const route = document.location.hash.substring(1);
    const resolved = mapper.map(route, routes);
    if (resolved) {
      resolved.match.action(resolved.values);
    }
  };

  window.onpopstate = resolveRoute;

  const routeMap = Object.keys(routes).reduce((result, route) => {
    result[routes[route].id] = route;
    return result;
  }, {});

  const routeSync = model => {
    const segment = routeMap[model.page.id] || "/";
    const route = mapper.stringify(segment, model.params || {});
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { resolveRoute, routeSync };
};
