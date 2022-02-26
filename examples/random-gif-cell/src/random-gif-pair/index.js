// @ts-check
import m from "mithril"

import { randomGif, RandomGif } from "../random-gif"

const initial = {
  first: randomGif.initial,
  second: randomGif.initial
}

export const randomGifPair = {
  initial
}

export const RandomGifPair = {
  view: ({ attrs: { cell, newGifGenerated } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { cell: cell.nest("first"), newGifGenerated })),
      m("div.dib.ml2", m(RandomGif, { cell: cell.nest("second"), newGifGenerated }))
    )
}
