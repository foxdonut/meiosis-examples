import { credentialsApi, clearToken } from "../services"

export const Initial = router => {
  const initial = {
    articles: [],
    login: {},
    register: {},
    settings: {},
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
