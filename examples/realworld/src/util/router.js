import Navigo from "navigo"

const root = ""
const useHash = true
const prefix = "#"

export const createRouter = routes => {
  const router = new Navigo(root, useHash, prefix)
  Object.keys(routes).forEach(route => router.on(route, routes[route]))
  router.resolve()
}
