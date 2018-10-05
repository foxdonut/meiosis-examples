import O from "patchinko/constant"

import { HomePage } from "../util/constants"
import { setToken } from "../services"

export const actions = ({ update, actions }) => ({
  logout: evt => {
    evt.preventDefault()
    setToken("")
    update({ user: O, navigateTo: actions.getNav(HomePage) })
  }
})
