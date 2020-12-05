import { nest } from "../util/nest"

export const Actions = RandomGifActions => update => ({
  first: RandomGifActions(nest(update, "first")),
  second: RandomGifActions(nest(update, "second"))
})
