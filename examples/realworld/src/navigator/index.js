import Navigo from "navigo"

const root = ""
const useHash = true
const prefix = "#"

const router = new Navigo(root, useHash, prefix)

const getUrl = (id, params) => {
  const result = router.generate(id, params)
  return result === "#" ? "#/" : result
}

const createNav = (pageId, route, params) => ({ pageId, url: route, params })

export const getNav = (pageId, params) =>
  createNav(pageId, getUrl(pageId, params), params)

export const Navigator = {
  actions: ({ update }) => {
    const routes = {}

    const navigator = {
      register: configs => {
        configs.forEach(config => {
          routes[config.route] = {
            as: config.pageId,
            uses: params => {
              update({ navigateTo: createNav(config.pageId, prefix + config.route, params) })
            }
          }
        })
        router.notFound(() => update({ pageId: undefined, url: document.location.hash }))
      },
      getUrl,
      navigateTo: (id, params) => router.navigate(getUrl(id, params)),
      start: () => router.on(routes).resolve()
    }
    return navigator
  },
  view: () => {

  }
}
