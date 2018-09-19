//const b = require("bss")
//const R = require("ramda")

const { nestUpdate } = require("../util/nest")
//const { createButton } = require("../button")
//const { createCounter } = require("../counter")
const RandomGif = require("../random-gif")
const RandomGifPair = require("../random-gif-pair")
const RandomGifPairPair = require("../random-gif-pair-pair")
//const { createRandomGifList } = require("../random-gif-list")

exports.createApp = update => {
  /*
  RandomGif.signals.newGif.map(() => {
    update(model => {
      const increment = model.counter.value > 3 && model.button.active ? 2 : 1
      return R.over(R.lensPath(["counter", "value"]), R.add(increment), model)
    })
  })
  const button = nestCreateComponent(createButton, update, ["button"])
  const counter = nestCreateComponent(createCounter("Counter"), update, ["counter"])
  */

  //const randomGif1 = nestComponent(RandomGif, update, ["randomGif1"])
  //const randomGif2 = nestComponent(RandomGif, update, ["randomGif2"])

  /*
  const randomGifPair = nestCreateComponent(createRandomGifPair, update, ["randomGifPair"])
  const randomGifPairPair = nestCreateComponent(createRandomGifPairPair, update, ["randomGifPairPair"])

  const randomGifList = nestCreateComponent(createRandomGifList, update, ["randomGifList"])
  */
  const nestedUpdate = (id, f) => nestUpdate(update, [id])(f)

  //const callbacks = { newGif: () => { ... } }

  const randomGifView = RandomGif.createView({ actions: RandomGif.createActions(nestedUpdate) })
  const randomGifPairView = RandomGifPair.createView({ randomGifView })
  const randomGifPairPairView = RandomGifPairPair.createView({ randomGifPairView })

  return {
    model: () => Object.assign(
      {},
      //button.model(),
      //counter.model(),
      RandomGif.model("randomGif:1"),
      RandomGif.model("randomGif:2"),
      RandomGifPair.model("randomGifPair"),
      RandomGifPairPair.model("randomGifPairPair")//,
      //randomGifList.model()
    ),

    //state: randomGifList.state,
    state: x => x,

    view: model => ["div",
      //counter.view(model),

      //["div"/*+ b.mt(8)*/, "Button:"],
      //button.view(model),

      ["div"/*+ b.mt(8)*/, "Random Gif:"],
      randomGifView(model, "randomGif:1"),

      ["div"/*+ b.mt(8)*/, "Another Random Gif:"],
      randomGifView(model, "randomGif:2"),

      ["div"/*+ b.mt(8)*/, "Random Gif Pair:"],
      randomGifPairView(model, "randomGifPair"),

      ["div"/*+ b.mt(8)*/, "Random Gif Pair Pair:"],
      randomGifPairPairView(model, "randomGifPairPair")//,

      //["div"/*+ b.mt(8)*/, "Random Gif List:"],
      //randomGifList.view(model)
    ]
  }
}
