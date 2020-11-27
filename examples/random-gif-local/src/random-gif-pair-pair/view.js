import m from "mithril"

import { nest } from "../util/nest"
import { RandomGifPair } from "../random-gif-pair"

export const RandomGifPairPair = {
  view: ({ attrs: { state, local, actions } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { state, local: nest("one", local), actions }),
      m(RandomGifPair, { state, local: nest("two", local), actions })
    )
}
