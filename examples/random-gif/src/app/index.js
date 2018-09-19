const R = require("ramda")
const Button = require("../button")
const Counter = require("../counter")
const RandomGif = require("../random-gif")
const RandomGifPair = require("../random-gif-pair")
const RandomGifPairPair = require("../random-gif-pair-pair")
const RandomGifList = require("../random-gif-list")

exports.createApp = update => {
  const buttonView = Button.createView({ actions: Button.createActions(update) })
  const counterView = Counter.createView()
  const randomGifView = RandomGif.createView({ actions: RandomGif.createActions(update) })
  const randomGifPairView = RandomGifPair.createView({ randomGifView })
  const randomGifPairPairView = RandomGifPairPair.createView({ randomGifPairView })
  const randomGifListView = RandomGifList.createView(
    { randomGifView, actions: RandomGifList.createActions(update) })

  return {
    model: () => Object.assign(
      {},
      Button.model("button"),
      Counter.model("counter", "Counter"),
      RandomGif.model("randomGif:1"),
      RandomGif.model("randomGif:2"),
      RandomGifPair.model("randomGifPair"),
      RandomGifPairPair.model("randomGifPairPair"),
      RandomGifList.model("randomGifList")
    ),

    state: model => {
      if (model["handler:newGifCounted"] !== model["event:newGifGenerated"]) {
        const increment = model.counter.value > 3 && model.button.active ? 2 : 1
        model.counter.value = model.counter.value + increment
        model["handler:newGifCounted"] = model["event:newGifGenerated"]
      }
      model.randomGifList.hasGifs = R.any(
        R.equals("Y"),
        R.map(R.path(["image", "value", "value", "case"]),
          R.map(id => R.prop(id, model), model.randomGifList.randomGifIds)))

      return model
    },

    view: model => ["div",
      counterView(model, "counter"),

      ["div.mt2", "Button:"],
      buttonView(model, "button"),

      ["div.mt2", "Random Gif:"],
      randomGifView(model, "randomGif:1"),

      ["div.mt2", "Another Random Gif:"],
      randomGifView(model, "randomGif:2"),

      ["div.mt2", "Random Gif Pair:"],
      randomGifPairView(model, "randomGifPair"),

      ["div.mt2", "Random Gif Pair Pair:"],
      randomGifPairPairView(model, "randomGifPairPair"),

      ["div.mt2", "Random Gif List:"],
      randomGifListView(model, "randomGifList")
    ]
  }
}
