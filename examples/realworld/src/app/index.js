import { root, Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { Route, routes } from "../routes"
import { router } from "../router"
import { register } from "../register"
import { login } from "../login"
import { articleEdit } from "../articleEdit"
import { settings } from "../settings"

const route = { current: router.initialRoute }

export const app = {
  Initial: () => credentialsApi
    .getUser()
    .then(user => root.Initial({ user, route }))
    .catch(() => {
      clearToken()
      return root.Initial({ route })
    }),

  Actions: update =>
    Object.assign({},
      routes.Actions(update),
      register.Actions(update),
      login.Actions(update),
      articleEdit.Actions(update),
      settings.Actions(update)
    ),

  acceptors: [
    settings.guard,
    routes.accept,
    articleEdit.accept,
    register.accept,
    login.accept,
    settings.accept
  ],

  services: [],

  view: Root
}

