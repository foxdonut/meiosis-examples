import m from "mithril"

import { RandomGif } from "../random-gif"

export const RandomGifPair = {
  view: ({ attrs: { context } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { context: context.nest("first") })),
      m("div.dib.ml2", m(RandomGif, { context: context.nest("second") }))
    )
}
