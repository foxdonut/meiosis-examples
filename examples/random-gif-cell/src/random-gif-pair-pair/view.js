// @ts-check
import m from "mithril"

import { RandomGifPair } from "../random-gif-pair"

export const RandomGifPairPair = {
  view: ({ attrs: { cells } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { cells: cells.one }),
      m(RandomGifPair, { cells: cells.two })
    )
}
