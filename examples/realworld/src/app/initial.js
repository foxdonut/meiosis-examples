import { credentialsApi, clearToken } from "../services"
import { router } from "../router"

export const Initial = () => {
  const initial = {
    articles: [],
    login: {},
    register: {},
    route: router.initialRoute,
    routeChanged: true,
    settings: {}
  }

  return credentialsApi
    .getUser()
    .then(user => Object.assign(initial, { user }))
    .catch(() => {
      clearToken()
      return initial
    })
}
