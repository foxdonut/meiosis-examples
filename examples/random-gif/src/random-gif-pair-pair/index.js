const RandomGifPair = require("../random-gif-pair")

module.exports = {
  model: id => Object.assign(
    RandomGifPair.model(id + "One"),
    RandomGifPair.model(id + "Two")
  ),
  dependencies: { randomGifPair: RandomGifPair },
  view: ({ randomGifPair }) => (model, id) => ["div.ba.b--orange.pa2.mt2",
    randomGifPair(model, id + "One"),
    randomGifPair(model, id + "Two")
  ]
}
