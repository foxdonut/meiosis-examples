import Mapper from "url-mapper"

export const createRouter = ({ update }) => {
  const extractRoute = hash => (hash && hash.substring(1)) || "/"

  const urlMapper = Mapper()

  const routes = {
    "/": () => update({ filterBy: "all" }),
    "/active": () => update({ filterBy: "active" }),
    "/completed": () => update({ filterBy: "completed" }),
  }

  const resolveRoute = () => {
    const route = extractRoute(document.location.hash)
    const resolved = urlMapper.map(route, routes)
    if (resolved) {
      const action = resolved.match
      action()
    }
  }

  // Listen for route changes.
  window.onpopstate = resolveRoute

  // Resolve initial route.
  resolveRoute()

  const routeSync = state => {
    const route = "/" + (state.filterBy === "all" ? "" : state.filterBy)
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route)
    }
    return state
  }

  return { routeSync }
}
