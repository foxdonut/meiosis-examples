import O from "patchinko/constant"

import { profileApi, setToken } from "../services"
import { HomePage } from "../util/constants"
import { pick } from "../util/fp"

export const actions = ({ update, actions }) => ({
  updateSettingsForm: (field, value) =>
    update({ user: O({ [field]: value }) }),

  updateSettings: user => profileApi.update(
    { user: pick(["email", "username", "password", "image", "bio"], user) }),

  logout: () => {
    setToken("")
    actions.navigateTo(HomePage)
    update({ user: O }) //FIXME
  }
})
