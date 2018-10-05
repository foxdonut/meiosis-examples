import Navigo from "navigo"

const root = ""
const useHash = true
const prefix = "#"

export const Navigator = {
  actions: routeMappings => ({ update }) => {
    const router = new Navigo(root, useHash, prefix)
    const routes = {}

    const createNav = (pageId, route, params) => ({ pageId, url: route, params })

    routeMappings.forEach(({ pageId, route }) => {
      routes[route] = {
        as: pageId,
        uses: params => {
          update({ navigateTo: createNav(pageId, prefix + route, params) })
        }
      }
    })
    router.notFound(() => update({ pageId: undefined, url: document.location.hash }))
    router.on(routes).resolve()

    const getUrl = (id, params) => {
      const result = router.generate(id, params)
      return result === "#" ? "#/" : result
    }

    const getNav = (pageId, params) =>
      createNav(pageId, getUrl(pageId, params), params)

    // FIXME: getUrl, getNav should not be actions
    return {
      getUrl,
      getNav,
      navigateTo: (id, params) => router.navigate(getUrl(id, params)),
    }
  }
}
