import { nest } from "../util/nest"

export const Actions = (update, RandomGifActions) => ({
  first: RandomGifActions(nest(update, "first")),
  second: RandomGifActions(nest(update, "second"))
})
