import superouter from "superouter"
import m from "mithril"

const prefix = "#"

export const Route = superouter.type("Route", {
  Home: "/",
  Settings: "/settings/:username"
})

export const parseUrl = (hash = document.location.hash || "#/") => {
  const [ url, queryString ] = hash.substring(1).split("?")
  const route = Route.matchOr(() => Route.of.Home(), url)
  route.query = queryString
    ? m.parseQueryString(queryString)
    : {}
  return route
}

export const getUrl = (route, query = route.query) => {
  let result = Route.toURL(route)
  if (query && Object.keys(query).length > 0) {
    result += "?" + m.buildQueryString(query)
  }
  return prefix + result
}

export const listenToRouteChanges = navigate =>
  window.onpopstate = () => navigate(parseUrl())
