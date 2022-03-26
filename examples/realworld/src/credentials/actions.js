import { credentialsApi, setToken } from "../services"
import { Route, routeTo } from "../router"
import { pick } from "../util/fp"

export const actions = {
  updateCredForm: (cell, method, field) => text => cell.update({ [method]: { [field]: text } }),

  sendCredentials: method => cell => {
    const fields = ["email", "password"].concat(method === "register" ? ["username"] : [])
    credentialsApi[method]({ user: pick(fields, cell.state[method]) })
      .then(({ user }) => {
        setToken(user.token)
        cell.update([routeTo(Route.Home), { user }])
      })
      .catch(err => cell.update({ [method]: { errors: err.response && err.response.errors } }))
  }
}
