import O from "patchinko/constant"

import { setToken } from "../services"

export const actions = ({ update, actions }) => ({
  logout: () => {
    setToken("")
    update({ user: O })
    actions.navigateToHome()
  }
})
