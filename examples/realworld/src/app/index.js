import { Root } from "../root"
import { credentialsApi } from "../services"
import { wirem } from "../util/wirem"

export const createApp = update => Promise.all([
  credentialsApi.getUser()
]).then(([user]) =>
  wirem({
    component: Root,
    data: { user },
    update
  }))
