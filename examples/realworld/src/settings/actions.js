import { profileApi, clearToken } from "../services"
import { Route, routeTo } from "../router"
import { omit } from "../util/fp"

export const Actions = update => ({
  updateSettingsForm: (field, value) => update({ settings: { [field]: value } }),

  updateSettings: settings =>
    profileApi
      .update({ user: omit(["errors"], settings) })
      .then(() =>
        update([routeTo(Route.Profile, { username: settings.username }), { user: settings }])
      )
      .catch(err => update({ settings: { errors: err.errors } })),

  logout: () => {
    clearToken()
    update([routeTo(Route.Home), { user: null, logout: true }])
  }
})
