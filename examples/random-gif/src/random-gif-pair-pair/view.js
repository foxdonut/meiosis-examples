import m from "mithril"

import { RandomGifPair } from "../random-gif-pair"
import { lensProp } from "../util"

export const RandomGifPairPair = {
  view: ({ attrs: { context, actions } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { context: lensProp(context, "One"), actions }),
      m(RandomGifPair, { context: lensProp(context, "Two"), actions })
    )
}
