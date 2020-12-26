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
      home.Effect(update),
      register.Effect(update),
      login.Effect(update),
      profile.Effect(update),
      article.Effect(update),
      settings.Effect(update)
    ],

    view: Root
  }))
