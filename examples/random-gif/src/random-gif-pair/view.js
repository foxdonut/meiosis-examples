import m from "mithril"

import { RandomGif } from "../random-gif"
import { lensProp } from "../util"

export const RandomGifPair = {
  view: ({ attrs: { context, actions } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { context: lensProp(context, "First"), actions })),
      m("div.dib.ml2", m(RandomGif, { context: lensProp(context, "Second"), actions }))
    )
}
