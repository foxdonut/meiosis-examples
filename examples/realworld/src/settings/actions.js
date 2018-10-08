import O from "patchinko/constant"

import { setToken } from "../services"
import { HomePage } from "../util/constants"

export const actions = ({ update, actions }) => ({
  logout: () => {
    setToken("")
    update({ user: O })
    actions.navigateTo(HomePage)
  }
})
