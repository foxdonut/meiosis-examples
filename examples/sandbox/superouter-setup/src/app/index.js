import O from "patchinko/constant"

import { Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { listenToRouteChanges, parseUrl } from "../util/router"
import { wirem } from "../util/wirem"

const wireApp = (update, data) =>
  wirem({
    component: Root,
    update,
    properties: {
      model: Root.model(data)
    },
    combinators: {
      service: list => model => list.reduce((x, f) => O(x, f(x)), model)
    }
  })

export const createApp = (update, navigate) => {
  listenToRouteChanges(navigate)

  // parse initial url
  const data = parseUrl()

  return credentialsApi.getUser()
    .then(user => wireApp(update, Object.assign(data, { user })))
    .catch(() => {
      clearToken()
      return wireApp(update, data)
    })
}
