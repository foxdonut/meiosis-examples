import Mapper from "url-mapper"
import _ from "lodash"

export const createRouter = ({ update }) => {
  const extractRoute = hash => (hash && hash.substring(1)) || "/"

  const urlMapper = Mapper()

  const routes = {
    "/": () => update(state => _.set(state, "filterBy", "all")),
    "/active": () => update(state => _.set(state, "filterBy", "active")),
    "/completed": () => update(state => _.set(state, "filterBy", "completed")),
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

  const routeSync = state => {
    const route = "/" + (state.filterBy === "all" ? "" : state.filterBy)
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route)
    }
    return state
  }

  return { routeSync }
}
