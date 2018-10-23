import O from "patchinko/constant"

import { Root } from "../root"
import { credentialsApi } from "../services"
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
      verify: list => (model, patch) => list.reduce((x, f) => f(model, x), patch),
      state: list => model => list.reduce((x, f) => O(x, f(x)), model),
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

  return Promise.all([
    credentialsApi.getUser()
  ]).then(([user]) => wireApp(update, Object.assign(data, { user })))
    .catch(() => wireApp(update, data))
}
