import m from "mithril"

import { randomGif, RandomGif } from "../random-gif"
import { lensProp } from "../util"

export const randomGifPair = {
  initialState: () => ({
    First: randomGif.initialState(),
    Second: randomGif.initialState()
  })
}

export const RandomGifPair = {
  view: ({ attrs: { root, local } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { root, local: lensProp(local, "First") })),
      m("div.dib.ml2", m(RandomGif, { root, local: lensProp(local, "Second") }))
    )
}
