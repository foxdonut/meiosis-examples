import m from "mithril"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"

export const randomGifPairPair = {
  model: id => Object.assign(
    randomGifPair.model(id + "One"),
    randomGifPair.model(id + "Two")
  )
}

export const RandomGifPairPair = {
  view: ({ attrs: { model, id, actions } }) =>
    m("div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { model, id: id + "One", actions }),
      m(RandomGifPair, { model, id: id + "Two", actions })
    )
}
