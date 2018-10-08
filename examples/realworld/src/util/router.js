import Navigo from "navigo"

import { assoc } from "./fp"

const root = ""
const useHash = true
const prefix = "#"

export const createRouter = routeMappings => {
  const router = new Navigo(root, useHash, prefix)

  const routes = routeMappings.reduce((result, { pageId, route, handler }) =>
    assoc(route, {
      as: pageId,
      uses: (params, query) => handler({
        pageId, params, query, url: document.location.hash
      })
    }, result), {})

  router.on(routes).resolve()

  return {
    getUrl: (id, params) => {
      const result = router.generate(id, params)
      return result === prefix ? prefix + "/" : result
    },
    navigateTo: (id, params) => router.navigate(router.getUrl(id, params))
  }
}
