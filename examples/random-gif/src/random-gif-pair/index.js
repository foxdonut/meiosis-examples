//const b = require("bss")
const RandomGif = require("../random-gif")

module.exports = {
  model: id => Object.assign(
    RandomGif.model(id + ":first"),
    RandomGif.model(id + ":second")
  ),
  createView: ({ randomGifView }) => (model, id) => ["div"/*+ b.border("1px solid purple").p(8).mt(4)*/,
    ["div"/*+ b.d("inline-block")*/, randomGifView(model, id + ":first")],
    ["div"/*+ b.d("inline-block").ml(8)*/, randomGifView(model, id + ":second")]
  ]
}
