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

const RouteChangeEffect = (update, Effects) => {
  const routeChangeUpdate = patch => update([patch, { routeChanged: false }])
  const effects = Effects.map(Effect => Effect(routeChangeUpdate))

  return state => {
    if (state.routeChanged) {
      effects.forEach(effect => effect(state))
    }
  }
}

export const createApp = router =>
  Initial(router).then(initial => ({
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
      RouteChangeEffect(update, [
        home.Effect,
        register.Effect,
        login.Effect,
        article.Effect,
        settings.Effect,
        profile.Effect
      ])
    ],

    view: Root
  }))
