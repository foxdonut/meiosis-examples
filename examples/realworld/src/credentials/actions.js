import O from "patchinko/constant"

import { credentialsApi, setToken } from "../services"
import { HomePage, navigateTo } from "../util/router"
import { pick } from "../util/fp"

export const actions = update => ({
  updateCredForm: (method, field) => text => update({ [method]: O({ [field]: text }) }),

  sendCredentials: method => model => {
    const fields = ["email", "password"].concat(method === "register" ? ["username"] : [])
    credentialsApi[method]({ user: pick(fields, model[method]) }).
      then(({ user }) => {
        setToken(user.token)
        update(Object.assign(navigateTo(HomePage), { user }))
      }).
      catch(err => update({ [method]: O({ errors: err.errors }) }))
  }
})
