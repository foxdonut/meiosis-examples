import m from "mithril"

import { RandomGifPair } from "../random-gif-pair"

export const RandomGifPairPair = {
  view: ({ attrs: { context } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { context: context.nest("one") }),
      m(RandomGifPair, { context: context.nest("two") })
    )
}
