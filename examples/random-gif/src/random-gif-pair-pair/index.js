const b = require("bss")
const { nest } = require("../util/nest")
const { createRandomGifPair } = require("../random-gif-pair")

exports.createRandomGifPairPair = update => {
  const randomGifPairOne = nest(createRandomGifPair, update, ["randomGifPairOne"])
  const randomGifPairTwo = nest(createRandomGifPair, update, ["randomGifPairTwo"])

  return {
    model: () => Object.assign({}, randomGifPairOne.model(), randomGifPairTwo.model()),
    view: model => ["div" + b.border("1px solid orange").p(8).mt(4),
      randomGifPairOne.view(model),
      randomGifPairTwo.view(model)
    ]
  }
}
