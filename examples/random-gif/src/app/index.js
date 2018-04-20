const m = require("mithril");
const b = require("bss");
const R = require("ramda");

const { nest } = require("../util/nest");
const { createButton } = require("../button");
const { createCounter } = require("../counter");
const RandomGif = require("../random-gif");
const RandomGifPair = require("../random-gif-pair");
const { createRandomGifPairPair } = require("../random-gif-pair-pair");
const { createRandomGifList } = require("../random-gif-list");

exports.createApp = update => {
  const actions = {
    newGif: () => update(model => {
      const increment = model.counter.value > 3 && model.button.active ? 2 : 1;
      return R.over(R.lensPath(["counter", "value"]), R.add(increment), model);
    })
  };
  const button = nest(createButton, update, ["button"]);
  const counter = nest(createCounter("Counter"), update, ["counter"]);

  const createRandomGif = RandomGif.createRandomGif(actions);
  const randomGif1 = nest(createRandomGif, update, ["randomGif1"]);
  const randomGif2 = nest(createRandomGif, update, ["randomGif2"]);

  const createRandomGifPair = RandomGifPair.createRandomGifPair(createRandomGif);
  const randomGifPair = nest(createRandomGifPair, update, ["randomGifPair"]);
  const randomGifPairPair = nest(createRandomGifPairPair(createRandomGifPair),
    update, ["randomGifPairPair"]);

  const randomGifList = nest(createRandomGifList(createRandomGif), update, ["randomGifList"]);

  return {
    model: () => Object.assign(
      {},
      button.model(),
      counter.model(),
      randomGif1.model(),
      randomGif2.model(),
      randomGifPair.model(),
      randomGifPairPair.model(),
      randomGifList.model()
    ),

    state: randomGifList.state,

    view: model => [
      counter.view(model),

      m("div" + b.mt(8), "Button:"),
      button.view(model),

      m("div" + b.mt(8), "Random Gif:"),
      randomGif1.view(model),

      m("div" + b.mt(8), "Another Random Gif:"),
      randomGif2.view(model),

      m("div" + b.mt(8), "Random Gif Pair:"),
      randomGifPair.view(model),

      m("div" + b.mt(8), "Random Gif Pair Pair:"),
      randomGifPairPair.view(model),

      m("div" + b.mt(8), "Random Gif List:"),
      randomGifList.view(model)
    ]
  };
};
