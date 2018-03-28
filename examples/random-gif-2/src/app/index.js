const m = require("mithril");
const b = require("bss").default;
const R = require("ramda");

const { nest } = require("../util/nest");
const { createButton } = require("../button");
const { createCounter } = require("../counter");
const RandomGif = require("../random-gif");
const { createRandomGifPair } = require("../random-gif-pair");

exports.createApp = update => {
  const actions = {
    newGif: () => update(model => {
      const increment = model.counter.value > 3 && model.button.active ? 2 : 1;
      return R.over(R.lensPath(["counter", "value"]), R.add(increment), model);
    })
  };
  const button = nest(createButton, ["button"], update);
  const counter = nest(createCounter("Counter"), ["counter"], update);

  const createRandomGif = RandomGif.createRandomGif(actions);
  const randomGif1 = nest(createRandomGif, ["randomGif1"], update);
  const randomGif2 = nest(createRandomGif, ["randomGif2"], update);

  const randomGifPair = nest(createRandomGifPair(createRandomGif), ["randomGifPair"], update);

  return {
    model: () => Object.assign(
      {},
      button.model(),
      counter.model(),
      randomGif1.model(),
      randomGif2.model(),
      randomGifPair.model()
    ),

    view: model => [
      counter.view(model),

      m("div" + b.mt(8), "Button:"),
      button.view(model),

      m("div" + b.mt(8), "Random Gif:"),
      randomGif1.view(model),

      m("div" + b.mt(8), "Another Random Gif:"),
      randomGif2.view(model),

      m("div" + b.mt(8), "Random Gif Pair:"),
      randomGifPair.view(model)
    ]
  };
};
