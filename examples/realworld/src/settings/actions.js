import O from "patchinko/constant"

import { HomePage } from "../util/constants"
import { setToken } from "../services"
import { getNav } from "../navigator"

export const createActions = ({ update }) => ({
  logout: evt => {
    evt.preventDefault()
    setToken("")
    update({ context: O({ user: O }), navigateTo: getNav(HomePage) })
  }
})
