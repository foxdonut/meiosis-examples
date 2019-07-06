import { root, Root } from "../root"
import { credentialsApi, clearToken } from "../services"

const navigation = {} // FIXME

export const app = {
  Initial: () => credentialsApi
    .getUser()
    .then(user => root.Initial(Object.assign({ user }, navigation)))
    .catch(() => {
      clearToken()
      return root.Initial(navigation)
    }),

  view: Root
}

