import { PS, D } from "patchinko/explicit"

import { profileApi, clearToken } from "../services"
import { Route } from "../util/router"
import { omit } from "../util/fp"

export const actions = ({ update, navigate }) => ({
  updateSettingsForm: (field, value) =>
    update({ settings: PS({ [field]: value }) }),

  updateSettings: settings => profileApi.update({ user: omit(["errors"], settings) })
    .then(() => navigate({
      route: Route.of.Profile({ username: settings.username }),
      user: PS(settings)
    }))
    .catch(err => update({ settings: PS({ errors: err.errors }) })),

  logout: () => {
    clearToken()
    navigate({ route: Route.of.Home(), user: D, logout: true })
  }
})
