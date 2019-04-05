import Mapper from "url-mapper"

const routes = {
  "/": { filterBy: "all" },
  "/active": { filterBy: "active" },
  "/completed": { filterBy: "completed" }
}

const urlMapper = Mapper()

const parseUrl = (hash = document.location.hash || "#/") => {
  const resolved = urlMapper.map(hash.substring(1), routes)
  return resolved && resolved.match
}

export const router = {
  parseUrl,

  listenToRouteChanges: update => (window.onpopstate = () => update(parseUrl())),

  service: state => {
    const route = "#/" + (state.filterBy === "all" ? "" : state.filterBy)
    if (document.location.hash !== route) {
      window.history.pushState({}, "", route)
    }
  }
}
