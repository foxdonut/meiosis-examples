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

export const createNavigator = update => {
  const componentMap = {}
  const routes = {}
  let notFoundComponent = undefined

  const navigator = {
    register: (configs, notFound) => {
      configs.forEach(config => {
        const component = config.component
        componentMap[config.key] = component

        routes[config.route] = {
          as: config.key,
          uses: params => {
            update({ navigateTo: createNav(config.key, prefix + config.route, params) })
          }
        }
      })
      notFoundComponent = notFound

      if (notFoundComponent) {
        router.notFound(() => update({ pageId: undefined, url: document.location.hash }))
      }
    },
    getComponent: pageId => componentMap[pageId] || notFoundComponent,
    getUrl,
    navigateTo: (id, params) => router.navigate(getUrl(id, params)),
    start: () => router.on(routes).resolve()
  }
  return navigator
}
