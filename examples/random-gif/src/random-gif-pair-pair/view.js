import m from "mithril"

import { RandomGifPair } from "../random-gif-pair"

export const RandomGifPairPair = {
  view: ({ attrs: { state, id, actions } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { state, id: id + ":One", actions }),
      m(RandomGifPair, { state, id: id + ":Two", actions })
    )
}
