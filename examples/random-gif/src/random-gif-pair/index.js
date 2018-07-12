const b = require("bss")
const { nestStatic } = require("../util/nest")
const RandomGif = require("../random-gif")

exports.createRandomGifPair = update => {
  const randomGifFirst = nestStatic(RandomGif, update, ["randomGifFirst"])
  const randomGifSecond = nestStatic(RandomGif, update, ["randomGifSecond"])

  return {
    model: () => Object.assign({}, randomGifFirst.model(), randomGifSecond.model()),
    view: model => ["div" + b.border("1px solid purple").p(8).mt(4),
      ["div" + b.d("inline-block"), randomGifFirst.view(model)],
      ["div" + b.d("inline-block").ml(8), randomGifSecond.view(model)]
    ]
  }
}
