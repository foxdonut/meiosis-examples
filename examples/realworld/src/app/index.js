import { Initial } from "./initial"
import { Root } from "../root"
import { routes } from "../routes"
import { home } from "../home"
import { register } from "../register"
import { login } from "../login"
import { articleList } from "../articleList"
import { articleEdit } from "../articleEdit"
import { articleDetail } from "../articleDetail"
import { settings } from "../settings"
import { profile } from "../profile"

export const createApp = () =>
  Initial().then(patch => ({
    patch,

    Actions: update =>
      Object.assign(
        {},
        routes.Actions(update),
        register.Actions(update),
        login.Actions(update),
        articleList.Actions(update),
        articleDetail.Actions(update),
        articleEdit.Actions(update),
        settings.Actions(update),
        profile.Actions(update)
      ),

    services: [
      routes.service,
      settings.service,
      register.service,
      login.service,
      home.service,
      profile.service,
      articleDetail.service,
      articleEdit.service
    ],

    view: Root
  }))
