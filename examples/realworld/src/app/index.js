import O from "patchinko/constant"

import { Root } from "../root"
import { credentialsApi, clearToken } from "../services"
import { listenToRouteChanges, parseUrl } from "../util/router"
import { findProperties, wirem } from "../util/wirem"

const wireApp = (update, navigate, data) => {
  const properties = findProperties(Root, ["onNavigate", "service"])

  return {
    view: wirem({
      component: Root,
      update,
      navigate
    }),
    model: Root.model(data),
    service: model => properties.service.reduce((x, f) => O(x, f(x)), model),
    onNavigate: Object.assign.apply(null, properties.onNavigate)
  }
}

export const createApp = (update, navigate) => {
  listenToRouteChanges(navigate)

  // parse initial url
  const navigation = parseUrl()
  navigate(navigation)

  return credentialsApi.getUser()
    .then(user => wireApp(update, navigate, Object.assign({ user }, navigation)))
    .catch(() => {
      clearToken()
      return wireApp(update, navigate, navigation)
    })
}
