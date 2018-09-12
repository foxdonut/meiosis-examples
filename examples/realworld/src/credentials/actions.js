import O from "patchinko/constant"

import { credentialsApi, setToken } from "../services"
import { pick } from "../util/fp"

export const createActions = ({ update, method }) => ({
  updateForm: field => text => update({ [field]: text }),

  sendCredentials: model => {
    // FIXME: also need to include username for /register
    credentialsApi[method]({ user: pick(["email", "password"], model) }).
      then(({ user }) => {
        setToken(user.token)
        update({ context: O({ user }) })
      }).
      catch(err => update({ errors: err.errors }))
  }
})
