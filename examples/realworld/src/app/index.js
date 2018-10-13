import { Root } from "../root"
import { credentialsApi } from "../services"
import { wirem } from "../util/wirem"

const wireApp = (update, user) =>
  wirem({
    component: Root,
    data: { user },
    update
  })

export const createApp = update => Promise.all([
  credentialsApi.getUser()
]).then(([user]) => wireApp(update, user))
  .catch(() => wireApp(update))
