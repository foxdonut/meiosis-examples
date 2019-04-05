import m from "mithril"

import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { lens } from "../util"

export const randomGifPairPair = {
  initialState: () => ({
    One: randomGifPair.initialState(),
    Two: randomGifPair.initialState()
  })
}

export const RandomGifPairPair = {
  view: ({ attrs: { local } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { local: lens(local, ["One"]) }),
      m(RandomGifPair, { local: lens(local, ["Two"]) })
    )
}
