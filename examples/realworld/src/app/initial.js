import { root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { router } from "../router"

export const Initial = () => {
  const route = { current: router.initialRoute }

  return credentialsApi
    .getUser()
    .then(user => root.Initial({ user, route }))
    .catch(() => {
      clearToken()
      return root.Initial({ route })
    })
}
