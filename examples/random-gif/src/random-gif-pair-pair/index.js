// @ts-check
import m from "mithril"

import { randomGifPair, RandomGifPair } from "../random-gif-pair"

const initial = {
  one: randomGifPair.initial,
  two: randomGifPair.initial
}

export const randomGifPairPair = {
  initial
}

export const RandomGifPairPair = {
  view: ({ attrs: { cell, newGifGenerated } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { cell: cell.nest("one"), newGifGenerated }),
      m(RandomGifPair, { cell: cell.nest("two"), newGifGenerated })
    )
}
