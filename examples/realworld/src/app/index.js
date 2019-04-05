import { P } from "patchinko/explicit"

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
    initialState: Root.initialState(data),
    service: state => properties.service.reduce((x, f) => P(x, f(x)), state),
    onNavigate: Object.assign.apply(null, properties.onNavigate)
  }
}

export const createApp = (update, navigate) => {
  listenToRouteChanges(navigate)

  // parse initial url
  const navigation = parseUrl()
  navigate(navigation)

  return credentialsApi
    .getUser()
    .then(user => wireApp(update, navigate, Object.assign({ user }, navigation)))
    .catch(() => {
      clearToken()
      return wireApp(update, navigate, navigation)
    })
}
