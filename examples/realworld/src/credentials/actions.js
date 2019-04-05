import { PS } from "patchinko/explicit"

import { credentialsApi, setToken } from "../services"
import { Route } from "../util/router"
import { pick } from "../util/fp"

export const actions = ({ update, navigate }) => ({
  updateCredForm: (method, field) => text => update({ [method]: PS({ [field]: text }) }),

  sendCredentials: method => state => {
    const fields = ["email", "password"].concat(method === "register" ? ["username"] : [])
    credentialsApi[method]({ user: pick(fields, state[method]) })
      .then(({ user }) => {
        setToken(user.token)
        navigate({ route: Route.of.Home(), user })
      })
      .catch(err => update({ [method]: PS({ errors: err.response && err.response.errors }) }))
  }
})
