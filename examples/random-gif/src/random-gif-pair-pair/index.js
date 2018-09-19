const RandomGifPair = require("../random-gif-pair")

module.exports = {
  model: id => Object.assign(
    RandomGifPair.model(id + ":one"),
    RandomGifPair.model(id + ":two")
  ),
  createView: ({ randomGifPairView }) => (model, id) => ["div.ba.b--orange.pa2.mt2",
    randomGifPairView(model, id + ":one"),
    randomGifPairView(model, id + ":two")
  ]
}
