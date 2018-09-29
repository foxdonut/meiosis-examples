const RandomGif = require("../random-gif")

module.exports = {
  dependencies: [
    { component: RandomGif, key: "randomGif", models: ["First", "Second"] }
  ],
  view: ({ randomGif }) => (model, id) => ["div.ba.b--purple.pa2.mt2",
    ["div.dib", randomGif(model, id + "First")],
    ["div.dib.ml2", randomGif(model, id + "Second")]
  ]
}
