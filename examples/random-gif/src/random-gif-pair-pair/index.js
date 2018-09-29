const RandomGifPair = require("../random-gif-pair")

module.exports = {
  dependencies: [
    { component: RandomGifPair, key: "randomGifPair", models: ["One", "Two"] }
  ],
  view: ({ randomGifPair }) => (model, id) => ["div.ba.b--orange.pa2.mt2",
    randomGifPair(model, id + "One"),
    randomGifPair(model, id + "Two")
  ]
}
