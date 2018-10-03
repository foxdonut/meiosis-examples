import O from "patchinko/constant"

import { HomePage } from "../util/constants"
import { setToken } from "../services"
import { getNav } from "../navigator"

export const actions = ({ update }) => ({
  logout: evt => {
    evt.preventDefault()
    setToken("")
    update({ user: O, navigateTo: getNav(HomePage) })
  }
})
