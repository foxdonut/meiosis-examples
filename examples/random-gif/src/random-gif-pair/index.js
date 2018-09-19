const RandomGif = require("../random-gif")

module.exports = {
  model: id => Object.assign(
    RandomGif.model(id + ":first"),
    RandomGif.model(id + ":second")
  ),
  createView: ({ randomGifView }) => (model, id) => ["div.ba.b--purple.pa2.mt2",
    ["div.dib", randomGifView(model, id + ":first")],
    ["div.dib.ml2", randomGifView(model, id + ":second")]
  ]
}
