import { credentialsApi, setToken } from "../services"

export const createActions = (update, method) => ({
  updateForm: field => text => update({ [field]: text }),

  sendCredentials: model => {
    credentialsApi[method]({ user: model }).
      then(user => {
        setToken(user.user.token)
        update(user)
        //m.route.set("/")
      }).
      catch(err => update({ errors: err.errors }))
  }
})
