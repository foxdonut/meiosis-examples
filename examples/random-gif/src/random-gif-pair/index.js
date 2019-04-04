import m from "mithril"
import { randomGif, RandomGif } from "../random-gif"

export const randomGifPair = {
  initialState: id => ({
    [id + "First"]: randomGif.initialState(),
    [id + "Second"]: randomGif.initialState()
  })
}

export const RandomGifPair = {
  view: ({ attrs: { state, id, actions } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { state, id: id + "First", actions })),
      m("div.dib.ml2", m(RandomGif, { state, id: id + "Second", actions }))
    )
}
