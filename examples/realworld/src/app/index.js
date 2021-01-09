import { RouteChangeEffect } from "meiosis-router-setup"
import { credentialsApi, clearToken } from "../services"
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

const Initial = initialRoute => {
  const initial = {
    articles: [],
    login: {},
    register: {},
    settings: {},
    route: initialRoute,
    routeChanged: true
  }

  return credentialsApi
    .getUser()
    .then(user => Object.assign(initial, { user }))
    .catch(() => {
      clearToken()
      return initial
    })
}

export const createApp = initialRoute =>
  Initial(initialRoute).then(initial => ({
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
      RouteChangeEffect({
        update,
        Effects: [
          home.Effect,
          register.Effect,
          login.Effect,
          article.Effect,
          settings.Effect,
          profile.Effect
        ]
      })
    ],

    view: Root
  }))
