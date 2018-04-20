const m = require("mithril");
const b = require("bss");
const { nest } = require("../util/nest");

exports.createRandomGifPair = createRandomGif => update => {
  const randomGifFirst = nest(createRandomGif, update, ["randomGifFirst"]);
  const randomGifSecond = nest(createRandomGif, update, ["randomGifSecond"]);

  return {
    model: () => Object.assign({}, randomGifFirst.model(), randomGifSecond.model()),
    view: model => m("div" + b.border("1px solid purple").p(8).mt(4), [
      m("div" + b.d("inline-block"), randomGifFirst.view(model)),
      m("div" + b.d("inline-block").ml(8), randomGifSecond.view(model))
    ])
  }
};
