import { credentialsApi, clearToken } from "../services"
import { router } from "../router"

export const Initial = () => {
  const route = router.initialRoute

  return credentialsApi
    .getUser()
    .then(user => ({ user, route }))
    .catch(() => {
      clearToken()
      return { route }
    })
}
