import O from "patchinko/constant"

import { profileApi, clearToken } from "../services"
import { Route } from "../util/router"
import { omit } from "../util/fp"

export const actions = ({ update, navigate }) => ({
  updateSettingsForm: (field, value) =>
    update({ settings: O({ [field]: value }) }),

  updateSettings: settings => profileApi.update({ user: omit(["errors"], settings) })
    .then(() => navigate({
      route: Route.of.Profile({ username: settings.username }),
      user: O(settings)
    }))
    .catch(err => update({ settings: O({ errors: err.errors }) })),

  logout: () => {
    clearToken()
    navigate({ route: Route.of.Home(), user: O, logout: true })
  }
})
