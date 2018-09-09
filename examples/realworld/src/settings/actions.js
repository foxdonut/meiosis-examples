import { HomePage } from "../util/constants"
import { setToken } from "../services"

export const createActions = ({ navigator, update }) => ({
  logout: evt => {
    evt.preventDefault()
    setToken("")
    update({ user: {}, signedIn: false })
    navigator.navigateTo(HomePage)
  }
})
