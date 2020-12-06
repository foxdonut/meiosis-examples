import m from "mithril"

import { RandomGifPair } from "../random-gif-pair"

export const RandomGifPairPair = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { state: state.one, actions: actions.one }),
      m(RandomGifPair, { state: state.two, actions: actions.two })
    )
}
