// @ts-check
import m from "mithril"
import { nest } from "meiosis-setup/mergerino"

import { RandomGifPair } from "../random-gif-pair"

export const RandomGifPairPair = {
  view: ({ attrs: { cell } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { cell: nest(cell, "one") }),
      m(RandomGifPair, { cell: nest(cell, "two") })
    )
}
