import { Root } from "../root"
import { credentialsApi } from "../services"
import { wirem } from "../util/wirem"

const wireApp = (update, getState, user) =>
  wirem({
    component: Root,
    data: { user },
    update,
    getState
  })

export const createApp = (update, getState) => Promise.all([
  credentialsApi.getUser()
]).then(([user]) => wireApp(update, getState, user))
  .catch(() => wireApp(update, getState))
