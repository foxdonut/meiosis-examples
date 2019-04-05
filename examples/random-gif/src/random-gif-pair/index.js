import m from "mithril"

import { randomGif, RandomGif } from "../random-gif"
import { lens } from "../util"

export const randomGifPair = {
  initialState: () => ({
    First: randomGif.initialState(),
    Second: randomGif.initialState()
  })
}

export const RandomGifPair = {
  view: ({ attrs: { local } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { local: lens(local, ["First"]) })),
      m("div.dib.ml2", m(RandomGif, { local: lens(local, ["Second"]) }))
    )
}
