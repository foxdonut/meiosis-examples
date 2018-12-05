const m = require("mithril")
const { randomGifPair, RandomGifPair } = require("../random-gif-pair")

exports.randomGifPairPair = {
  model: id => Object.assign(
    randomGifPair.model(id + "One"),
    randomGifPair.model(id + "Two")
  )
}

exports.RandomGifPairPair = {
  view: ({ attrs: { model, id, actions } }) =>
    m("div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { model, id: id + "One", actions }),
      m(RandomGifPair, { model, id: id + "Two", actions })
    )
}
