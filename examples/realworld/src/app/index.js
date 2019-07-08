import { root, Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { Route, routes, navigateTo } from "../routes"
import { router } from "../router"
import { register } from "../register"
import { login } from "../login"

export const app = {
  Initial: () => credentialsApi
    .getUser()
    .then(user => root.Initial({ user, route: { current: router.initialRoute } }))
    .catch(() => {
      clearToken()
      return root.Initial(navigation)
    }),

  Actions: update =>
    Object.assign({},
      routes.Actions(update),
      register.Actions(update),
      login.Actions(update)
    ),

  acceptors: [
    routes.accept,
    register.accept,
    login.accept
  ],

  services: [],

  view: Root
}

