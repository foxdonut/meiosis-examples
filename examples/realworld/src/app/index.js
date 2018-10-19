import { Root } from "../root"
import { credentialsApi } from "../services"
import { listenToRouteChanges, parseUrl } from "../util/router"
import { wirem } from "../util/wirem"

const wireApp = (update, data) =>
  wirem({
    component: Root,
    data,
    update
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
