import O from "patchinko/constant"

import { Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { listenToRouteChanges, parseUrl } from "../util/router"
import { findProperties, wirem } from "../util/wirem"

const wireApp = (update, data) => {
  const properties = findProperties(Root, ["accept", "nextAction", "service"])
  const nextActionList = properties.nextAction.map(item => item(update))

  return {
    view: wirem({
      component: Root,
      update
    }),
    model: Root.model(data),
    accept: (model, patch) => properties.accept.reduce((x, f) => x && f(model, x), patch),
    service: (model, patch) => properties.service.reduce((x, f) => O(x, f(x, patch)), model),
    nextAction: (model, patch) => nextActionList.forEach(item => item(model, patch))
  }
}

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
