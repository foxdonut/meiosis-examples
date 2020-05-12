import { credentialsApi, setToken } from "../services"
import { Route, routeTo } from "../router"
import { pick } from "../util/fp"

export const Actions = update => ({
  updateCredForm: (method, field) => text => update({ [method]: { [field]: text } }),

  sendCredentials: method => state => {
    const fields = ["email", "password"].concat(method === "register" ? ["username"] : [])
    credentialsApi[method]({ user: pick(fields, state[method]) })
      .then(({ user }) => {
        setToken(user.token)
        update([routeTo(Route.Home), { user }])
      })
      .catch(err => update({ [method]: { errors: err.response && err.response.errors } }))
  }
})
