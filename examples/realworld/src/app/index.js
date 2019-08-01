import { Initial } from "./initial"
import { Root } from "../root"
import { routes } from "../routes"
import { home } from "../home"
import { register } from "../register"
import { login } from "../login"
import { articleSummary } from "../articleSummary"
import { articleEdit } from "../articleEdit"
import { articleDetail } from "../articleDetail"
import { settings } from "../settings"
import { profile } from "../profile"

export const app = {
  Initial,

  Actions: update =>
    Object.assign(
      {},
      routes.Actions(update),
      register.Actions(update),
      login.Actions(update),
      articleSummary.Actions(update),
      articleDetail.Actions(update),
      articleEdit.Actions(update),
      settings.Actions(update),
      profile.Actions(update)
    ),

  acceptors: [
    settings.guard,
    routes.accept,
    articleEdit.accept,
    register.accept,
    login.accept,
    settings.accept,
    profile.accept
  ],

  services: [home.service, profile.service, articleDetail.service, articleEdit.service],

  view: Root
}
