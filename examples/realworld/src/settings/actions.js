import O from "patchinko/constant"

import { profileApi, setToken } from "../services"
import { pick } from "../util/fp"
import { HomePage, navigateTo } from "../util/router"

export const actions = update => ({
  updateSettingsForm: (field, value) =>
    update({ user: O({ [field]: value }) }),

  updateSettings: user => profileApi.update(
    { user: pick(["email", "username", "password", "image", "bio"], user) }),

  logout: () => {
    setToken("")
    update(Object.assign(navigateTo(HomePage), { user: O }))
  }
})
