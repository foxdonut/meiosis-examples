import m from "mithril"
import { randomGif, RandomGif } from "../random-gif"

export const randomGifPair = {
  model: id => ({
    [id + "First"]: randomGif.model(),
    [id + "Second"]: randomGif.model()
  })
}

export const RandomGifPair = {
  view: ({ attrs: { model, id, actions } }) =>
    m("div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { model, id: id + "First", actions })),
      m("div.dib.ml2", m(RandomGif, { model, id: id + "Second", actions }))
    )
}
