const b = require("bss")
const { nestCreateComponent } = require("../util/nest")
const { createRandomGifPair } = require("../random-gif-pair")

exports.createRandomGifPairPair = update => {
  const randomGifPairOne = nestCreateComponent(createRandomGifPair, update, ["randomGifPairOne"])
  const randomGifPairTwo = nestCreateComponent(createRandomGifPair, update, ["randomGifPairTwo"])

  return {
    model: () => Object.assign({}, randomGifPairOne.model(), randomGifPairTwo.model()),
    view: model => ["div" + b.border("1px solid orange").p(8).mt(4),
      randomGifPairOne.view(model),
      randomGifPairTwo.view(model)
    ]
  }
}
