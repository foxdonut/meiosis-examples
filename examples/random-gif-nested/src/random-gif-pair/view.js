import m from "mithril"

import { nestLocal } from "../util/nest"
import { RandomGif } from "../random-gif"

export const RandomGifPair = {
  view: ({ attrs: { state, local, actions } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { state, local: nestLocal(local, ["first"]), actions })),
      m("div.dib.ml2", m(RandomGif, { state, local: nestLocal(local, ["second"]), actions }))
    )
}
