import Mapper from "url-mapper"

export const createRouter = actions => {
  const extractRoute = hash => (hash && hash.substring(1)) || "/"

  const urlMapper = Mapper()

  const routes = {
    "/": () => actions.filter(""),
    "/active": () => actions.filter("active"),
    "/completed": () => actions.filter("completed")
  }

  const resolveRoute = route => {
    const resolved = urlMapper.map(route, routes)
    if (resolved) {
      const action = resolved.match
      action()
    }
  }

  // Listen for route changes.
  window.onpopstate = () => {
    const route = extractRoute(document.location.hash)
    resolveRoute(route)
  }

  // Initial route.
  resolveRoute(extractRoute(window.location.hash))

  const routeSync = model => {
    const route = "/" + model.filterBy
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route)
    }
    return model
  }

  return { routeSync }
}
