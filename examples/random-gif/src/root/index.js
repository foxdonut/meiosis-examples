const O = require("patchinko/constant")

const Button = require("../button")
const Counter = require("../counter")
const CountingRule = require("../counting-rule")
const RandomGif = require("../random-gif")
const RandomGifPair = require("../random-gif-pair")
const RandomGifPairPair = require("../random-gif-pair-pair")
const RandomGifList = require("../random-gif-list")

module.exports = {
  model: () => Object.assign(
    {
      button: Button.model(),
      counter: Counter.model({ label: "Counter:" }),
      randomGif1: RandomGif.model(),
      randomGif2: RandomGif.model(),
      randomGifList: RandomGifList.model()
    },
    RandomGifPair.model("randomGifPair"),
    RandomGifPairPair.model("randomGifPairPair")
  ),
  actions: CountingRule.actions,
  dependencies: {
    button: Button,
    counter: Counter,
    rg: RandomGif,
    rgPair: RandomGifPair,
    rgPairPair: RandomGifPairPair,
    rgList: RandomGifList
  },
  view: ({ button, counter, rg, rgPair, rgPairPair, rgList }) => model => ["div",
    counter(model, "counter"),

    ["div.mt2", "Button:"],
    button(model, "button"),

    ["div.mt2", "Random Gif:"],
    rg(model, "randomGif1"),

    ["div.mt2", "Another Random Gif:"],
    rg(model, "randomGif2"),

    ["div.mt2", "Random Gif Pair:"],
    rgPair(model, "randomGifPair"),

    ["div.mt2", "Random Gif Pair Pair:"],
    rgPairPair(model, "randomGifPairPair"),

    ["div.mt2", "Random Gif List:"],
    rgList(model, "randomGifList")
  ],
  state: model => [
    RandomGifList.state
    // could have more functions here
  ].reduce((x, f) => O(x, f(x)), model)
}
