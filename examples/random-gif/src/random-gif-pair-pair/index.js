const m = require("mithril");
const b = require("bss");
const { nest } = require("../util/nest");

exports.createRandomGifPairPair = createRandomGifPair => update => {
  const randomGifPairOne = nest(createRandomGifPair, update, ["randomGifPairOne"]);
  const randomGifPairTwo = nest(createRandomGifPair, update, ["randomGifPairTwo"]);

  return {
    model: () => Object.assign({}, randomGifPairOne.model(), randomGifPairTwo.model()),
    view: model => m("div" + b.border("1px solid orange").p(8).mt(4), [
      randomGifPairOne.view(model),
      randomGifPairTwo.view(model)
    ])
  };
};
