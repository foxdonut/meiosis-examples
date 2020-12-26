import { credentialsApi, clearToken } from "../services"

export const Initial = () => {
  const initial = {
    articles: [],
    login: {},
    register: {},
    settings: {}
  }

  return credentialsApi
    .getUser()
    .then(user => Object.assign(initial, { user }))
    .catch(() => {
      clearToken()
      return initial
    })
}
