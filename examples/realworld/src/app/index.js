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
      accept: list => (model, patch) => list.reduce((x, f) => x && f(model, x), patch),
      service: list => (model, patch) => list.reduce((x, f) => O(x, f(x, patch)), model),
      nextAction: list => {
        const listWithUpdate = list.map(item => item(update))
        return (model, patch) => listWithUpdate.forEach(item => item(model, patch))
      }
    }
  })

export const createApp = update => {
  listenToRouteChanges(update)

  // parse initial url
  const data = parseUrl()

  return credentialsApi.getUser()
    .then(user => wireApp(update, Object.assign(data, { user })))
    .catch(() => {
      clearToken()
      return wireApp(update, data)
    })
}
