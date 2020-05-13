import { credentialsApi, clearToken } from "../services"
import { router } from "../router"

export const Initial = () => {
  const route = router.initialRoute

  const initial = { route, previous: {} }

  return credentialsApi
    .getUser()
    .then(user => Object.assign(initial, { user }))
    .catch(() => {
      clearToken()
      return initial
    })
}
