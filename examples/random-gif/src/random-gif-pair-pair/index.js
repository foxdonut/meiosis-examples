import m from "mithril"

import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { lensProp } from "../util"

export const randomGifPairPair = {
  initialState: () => ({
    One: randomGifPair.initialState(),
    Two: randomGifPair.initialState()
  })
}

export const RandomGifPairPair = {
  view: ({ attrs: { root, local } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { root, local: lensProp(local, "One") }),
      m(RandomGifPair, { root, local: lensProp(local, "Two") })
    )
}
