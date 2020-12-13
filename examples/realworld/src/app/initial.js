import { credentialsApi, clearToken } from "../services"
import { router } from "../router"

export const Initial = () => {
  const initial = {
    articles: [],
    route: router.initialRoute,
    routeChanged: true
  }

  return credentialsApi
    .getUser()
    .then(user => Object.assign(initial, { user }))
    .catch(() => {
      clearToken()
      return initial
    })
}
