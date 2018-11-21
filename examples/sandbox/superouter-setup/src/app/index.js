import O from "patchinko/constant"

import { Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { listenToRouteChanges, parseUrl } from "../util/router"
import { wirem } from "../util/wirem"

const wireApp = (update, navigate, data) => ({
  view: wirem({
    component: Root,
    update,
    navigate
  }),
  model: Root.model(data),
  service: model => [Root.service].reduce((x, f) => O(x, f(x)), model)
})

export const createApp = (update, navigate) => {
  listenToRouteChanges(navigate)

  // parse initial url
  const route = parseUrl()
  navigate(route)

  return credentialsApi.getUser()
    .then(user => wireApp(update, navigate, { route, user }))
    .catch(() => {
      clearToken()
      return wireApp(update, navigate, { route })
    })
}
