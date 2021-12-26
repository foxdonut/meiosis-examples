// @ts-check
import m from "mithril"
import { nest } from "meiosis-setup/mergerino"

import { RandomGif, randomGif } from "../random-gif"

export const RandomGifPair = {
  view: ({ attrs: { cell } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { cell: nest(cell, "first", randomGif.Actions) })),
      m("div.dib.ml2", m(RandomGif, { cell: nest(cell, "second", randomGif.Actions) }))
    )
}
