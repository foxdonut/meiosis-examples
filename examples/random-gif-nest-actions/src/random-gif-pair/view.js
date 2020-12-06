import m from "mithril"

import { RandomGif } from "../random-gif"

export const RandomGifPair = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { state: state.first, actions: actions.first })),
      m("div.dib.ml2", m(RandomGif, { state: state.second, actions: actions.second }))
    )
}
