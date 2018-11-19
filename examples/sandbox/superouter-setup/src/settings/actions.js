import O from "patchinko/constant"

import { profileApi, clearToken } from "../services"
import { HomePage, ProfilePage, navigateTo } from "../util/router"
import { omit } from "../util/fp"

export const actions = update => ({
  updateSettingsForm: (field, value) =>
    update({ settings: O({ [field]: value }) }),

  updateSettings: settings => profileApi.update({ user: omit(["errors"], settings) })
    .then(() => update(Object.assign(
      { user: O(settings) },
      navigateTo(ProfilePage, { username: settings.username })
    )))
    .catch(err => update({ settings: O({ errors: err.errors }) })),

  logout: () => {
    clearToken()
    update(Object.assign(navigateTo(HomePage), { user: O, logout: true }))
  }
})
