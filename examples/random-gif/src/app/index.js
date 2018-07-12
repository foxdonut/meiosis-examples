const b = require("bss")
const R = require("ramda")

const { nest, nestStatic } = require("../util/nest")
const { createButton } = require("../button")
const { createCounter } = require("../counter")
const RandomGif = require("../random-gif")
const { createRandomGifPair } = require("../random-gif-pair")
const { createRandomGifPairPair } = require("../random-gif-pair-pair")
const { createRandomGifList } = require("../random-gif-list")

exports.createApp = update => {
  RandomGif.signals.newGif.map(() => {
    update(model => {
      const increment = model.counter.value > 3 && model.button.active ? 2 : 1
      return R.over(R.lensPath(["counter", "value"]), R.add(increment), model)
    })
  })
  const button = nest(createButton, update, ["button"])
  const counter = nest(createCounter("Counter"), update, ["counter"])

  const randomGif1 = nestStatic(RandomGif, update, ["randomGif1"])
  const randomGif2 = nestStatic(RandomGif, update, ["randomGif2"])

  const randomGifPair = nest(createRandomGifPair, update, ["randomGifPair"])
  const randomGifPairPair = nest(createRandomGifPairPair, update, ["randomGifPairPair"])

  const randomGifList = nest(createRandomGifList, update, ["randomGifList"])

  return {
    model: () => Object.assign(
      {},
      button.model(),
      counter.model(),
      randomGif1.model(),
      randomGif2.model(),
      randomGifPair.model(),
      randomGifPairPair.model(),
      randomGifList.model()
    ),

    state: randomGifList.state,

    view: model => ["div",
      counter.view(model),

      ["div" + b.mt(8), "Button:"],
      button.view(model),

      ["div" + b.mt(8), "Random Gif:"],
      randomGif1.view(model),

      ["div" + b.mt(8), "Another Random Gif:"],
      randomGif2.view(model),

      ["div" + b.mt(8), "Random Gif Pair:"],
      randomGifPair.view(model),

      ["div" + b.mt(8), "Random Gif Pair Pair:"],
      randomGifPairPair.view(model),

      ["div" + b.mt(8), "Random Gif List:"],
      randomGifList.view(model)
    ]
  }
}
