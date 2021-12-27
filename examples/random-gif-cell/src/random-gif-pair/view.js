// @ts-check
import m from "mithril"

import { RandomGif } from "../random-gif"

export const RandomGifPair = {
  view: ({ attrs: { cells } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { cell: cells.first })),
      m("div.dib.ml2", m(RandomGif, { cell: cells.second }))
    )
}
