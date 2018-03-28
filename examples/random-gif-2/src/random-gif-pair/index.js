const m = require("mithril");
const b = require("bss").default;
const { nest } = require("../util/nest");

export const createRandomGifPair = createRandomGif => update => {
  const randomGifFirst = nest(createRandomGif, ["randomGifFirst"], update);
  const randomGifSecond = nest(createRandomGif, ["randomGifSecond"], update);

  return {
    model: () => Object.assign({}, randomGifFirst.model(), randomGifSecond.model()),
    view: model => m("div" + b.border("1px solid purple").p(8).mt(4), [
      m("div" + b.d("inline-block"), randomGifFirst.view(model)),
      m("div" + b.d("inline-block").ml(8), randomGifSecond.view(model))
    ])
  }
};
