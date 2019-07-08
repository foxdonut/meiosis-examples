import { root, Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { Route, routes, navigateTo } from "../routes"
import { register } from "../register"
import { login } from "../login"

const navigation = navigateTo([Route.Home()]) // FIXME
// Initial: () => navigateTo(initialRoute || [Route.Home()]),

export const app = {
  Initial: () => credentialsApi
    .getUser()
    .then(user => root.Initial(Object.assign({ user }, navigation)))
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

