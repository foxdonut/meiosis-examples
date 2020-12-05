import { nest } from "../util/nest"

export const Actions = RandomGifPairActions => update => ({
  one: RandomGifPairActions(nest(update, "one")),
  two: RandomGifPairActions(nest(update, "two"))
})
