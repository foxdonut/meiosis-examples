// @ts-check
import m from "mithril"

import { randomGifPair, RandomGifPair } from "../random-gif-pair"

export const randomGifPairPair = {
  nested: {
    one: randomGifPair,
    two: randomGifPair
  }
}

export const RandomGifPairPair = {
  view: ({ attrs: { cell, newGifGenerated } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { cell: cell.nest("one"), newGifGenerated }),
      m(RandomGifPair, { cell: cell.nest("two"), newGifGenerated })
    )
}
