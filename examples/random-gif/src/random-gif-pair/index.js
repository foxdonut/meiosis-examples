const RandomGif = require("../random-gif")

module.exports = {
  model: id => ({
    [id + "First"]: RandomGif.model(),
    [id + "Second"]: RandomGif.model()
  }),
  dependencies: [ { component: RandomGif, key: "randomGif" } ],
  view: ({ randomGif }) => (model, id) => ["div.ba.b--purple.pa2.mt2",
    ["div.dib", randomGif(model, id + "First")],
    ["div.dib.ml2", randomGif(model, id + "Second")]
  ]
}
