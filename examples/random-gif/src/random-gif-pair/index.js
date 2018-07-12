const b = require("bss")
const { nestComponent } = require("../util/nest")
const RandomGif = require("../random-gif")

exports.createRandomGifPair = update => {
  const randomGifFirst = nestComponent(RandomGif, update, ["randomGifFirst"])
  const randomGifSecond = nestComponent(RandomGif, update, ["randomGifSecond"])

  return {
    model: () => Object.assign({}, randomGifFirst.model(), randomGifSecond.model()),
    view: model => ["div" + b.border("1px solid purple").p(8).mt(4),
      ["div" + b.d("inline-block"), randomGifFirst.view(model)],
      ["div" + b.d("inline-block").ml(8), randomGifSecond.view(model)]
    ]
  }
}
