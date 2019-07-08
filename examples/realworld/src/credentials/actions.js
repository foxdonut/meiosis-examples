import { credentialsApi, setToken } from "../services"
import { Route } from "../routes"
import { pick } from "../util/fp"

export const Actions = update => ({
  updateCredForm: (method, field) => text => update({ [method]: { [field]: text } }),

  sendCredentials: method => state => {
    const fields = ["email", "password"].concat(method === "register" ? ["username"] : [])
    credentialsApi[method]({ user: pick(fields, state[method]) })
      .then(({ user }) => {
        setToken(user.token)
        navigate({ route: Route.of.Home(), user })
      })
      .catch(err => update({ [method]: { errors: err.response && err.response.errors } }))
  }
})
