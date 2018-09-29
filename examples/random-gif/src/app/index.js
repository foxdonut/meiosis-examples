const O = require("patchinko/constant")

const Button = require("../button")
const Counter = require("../counter")
const CountingRule = require("../counting-rule")
const RandomGif = require("../random-gif")
const RandomGifPair = require("../random-gif-pair")
const RandomGifPairPair = require("../random-gif-pair-pair")
const RandomGifList = require("../random-gif-list")

const { wirem } = require("../util/wirem")

exports.createApp = update => {
  const Root = {
    dependencies: [
      { component: Button, key: "button", model: "button" },
      { component: Counter, key: "counter", model: "counter" },
      { component: RandomGif, key: "rg", models: ["randomGif1", "randomGif2"] },
      { component: RandomGifPair, key: "rgPair", model: "randomGifPair" },
      { component: RandomGifPairPair, key: "rgPairPair", model: "randomGifPairPair" },
      { component: RandomGifList, key: "rgList", model: "randomGifList" }
    ],
    actions: CountingRule.actions,
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
    ]
  }

  const app = wirem({
    component: Root,
    data: { label: "Counter" },
    update
  })

  app.state = model => [
    RandomGifList.state
    // could have more functions here
  ].reduce((x, f) => O(x, f(x)), model)

  return app
}
