const m = require("mithril");
const b = require("bss").default;
const { nest } = require("../util/nest");

export const createRandomGifPairPair = createRandomGifPair => update => {
  const randomGifPairOne = nest(createRandomGifPair, ["randomGifPairOne"], update);
  const randomGifPairTwo = nest(createRandomGifPair, ["randomGifPairTwo"], update);

  return {
    model: () => Object.assign({}, randomGifPairOne.model(), randomGifPairTwo.model()),
    view: model => m("div" + b.border("1px solid orange").p(8).mt(4), [
      randomGifPairOne.view(model),
      randomGifPairTwo.view(model)
    ])
  };
};
