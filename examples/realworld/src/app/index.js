import { Initial } from "./initial"
import { Root } from "../root"
import { home } from "../home"
import { register } from "../register"
import { login } from "../login"
import { article } from "../article"
import { articleList } from "../articleList"
import { articleEdit } from "../articleEdit"
import { articleDetail } from "../articleDetail"
import { settings } from "../settings"
import { profile } from "../profile"
import { selectors } from "../selectors"

const RouteChangeEffect = (update, effectMap) => {
  const routeChangeUpdate = patch => update([patch, { routeChanged: false }])

  const pageMap = Object.keys(effectMap).reduce(
    (result, key) => ({ ...result, [key]: effectMap[key](routeChangeUpdate) }),
    {}
  )

  return state => {
    if (state.routeChanged) {
      const effect = pageMap[selectors.page(state)]

      if (effect) {
        effect(state)
      }
    }
  }
}

export const createApp = () =>
  Initial().then(initial => ({
    initial,

    Actions: update =>
      Object.assign(
        {},
        register.Actions(update),
        login.Actions(update),
        articleList.Actions(update),
        articleDetail.Actions(update),
        articleEdit.Actions(update),
        settings.Actions(update),
        profile.Actions(update)
      ),

    Effects: update => [
      RouteChangeEffect(
        update,
        Object.assign(
          {},
          home.RouteChange,
          register.RouteChange,
          login.RouteChange,
          article.RouteChange,
          settings.RouteChange,
          profile.RouteChange
        )
      )
    ],

    view: Root
  }))
