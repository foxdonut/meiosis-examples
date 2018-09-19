//const b = require("bss")
const RandomGifPair = require("../random-gif-pair")

module.exports = {
  model: id => Object.assign(
    RandomGifPair.model(id + ":one"),
    RandomGifPair.model(id + ":two")
  ),
  createView: ({ randomGifPairView }) => (model, id) => ["div"/*+ b.border("1px solid orange").p(8).mt(4)*/,
    randomGifPairView(model, id + ":one"),
    randomGifPairView(model, id + ":two")
  ]
}
