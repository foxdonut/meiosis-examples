import O from "patchinko/constant"

import { credentialsApi, setToken } from "../services"
import { LoginPage, RegisterPage } from "../util/constants"
import { pick } from "../util/fp"

export const actions = ({ method }) => ({ update }) => ({
  updateForm: (method, field) => text => update({ [method]: O({ [field]: text }) }),

  sendCredentials: model => {
    // FIXME: also need to include username for /register
    credentialsApi[method]({ user: pick(["email", "password"], model) }).
      then(({ user }) => {
        setToken(user.token)
        update({ context: O({ user }) })
      }).
      catch(err => update({ errors: err.errors }))
  },

  navigateToLogin: () => update({ pageId: LoginPage }),
  navigateToRegister: () => update({ pageId: RegisterPage })
})
