import O from "patchinko/constant"

import { credentialsApi, setToken } from "../services"
import { HomePage } from "../util/constants"
import { pick } from "../util/fp"

export const actions = ({ update, actions }) => ({
  updateCredForm: (method, field) => text => update({ [method]: O({ [field]: text }) }),

  sendCredentials: method => model => {
    const fields = ["email", "password"].concat(method === "register" ? ["username"] : [])
    credentialsApi[method]({ user: pick(fields, model[method]) }).
      then(({ user }) => {
        setToken(user.token)
        update({ user })
        actions.navigateTo(HomePage)
      }).
      catch(err => update({ [method]: O({ errors: err.errors }) }))
  }
})
