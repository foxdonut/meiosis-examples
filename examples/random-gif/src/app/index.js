import m from "mithril";
import { nest } from "../util";
import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
import { randomGifPairPair } from "../random-gif-pair-pair";
import { randomGifList } from "../random-gif-list";
import { randomGifCounter } from "../random-gif-counter";

export const app = {
  model: () => ({
    counter: counter.model(),
    button: button.model(),
    randomGif1: randomGif.model("randomGif1"), // can either assign an id...
    randomGif2: randomGif.model(),             // or use the component's generated id
    randomGifPair: randomGifPair.model(),
    randomGifPairPair: randomGifPairPair.model(),
    randomGifList: randomGifList.model(),
    randomGifCounter1: randomGifCounter.model(),
    randomGifCounter2: randomGifCounter.model()
  }),
  create: (update, events) => {
    const components = {
      counter: counter.create("Total Counter: "),
      button: button.create(nest(update, "button")),
      randomGif1: randomGif.create(nest(update, "randomGif1"), events.randomGif),
      randomGif2: randomGif.create(nest(update, "randomGif2"), events.randomGif),
      randomGifPair: randomGifPair.create(nest(update, "randomGifPair"), events.randomGif),
      randomGifPairPair: randomGifPairPair.create(nest(update, "randomGifPairPair"), events.randomGif),
      randomGifList: randomGifList.create(nest(update, "randomGifList"), events.randomGif),
      randomGifCounter1: randomGifCounter.create(nest(update, "randomGifCounter1"), events.randomGifCounter1),
      randomGifCounter2: randomGifCounter.create(nest(update, "randomGifCounter2"), events.randomGifCounter2)
    };

    return model =>
      [
        components.counter(model.counter),

        m("div.mt2", "Button:"),
        components.button(model.button),

        m("div.mt2", "Random Gif:"),
        components.randomGif1(model.randomGif1),

        m("div.mt2", "Another Random Gif:"),
        components.randomGif2(model.randomGif2),

        m("div.mt2", "Random Gif Pair:"),
        components.randomGifPair(model.randomGifPair),

        m("div.mt2", "Random Gif Pair Pair:"),
        components.randomGifPairPair(model.randomGifPairPair),

        m("div.mt2", "Random Gif List:"),
        components.randomGifList(model.randomGifList),

        m("div.mt2", "Random Gif with Counter (doesn't count in total):"),
        components.randomGifCounter1(model.randomGifCounter1),

        m("div.mt2", "Another Random Gif with Counter (counts in total):"),
        components.randomGifCounter2(model.randomGifCounter2),

        components.counter(model.counter)
    ];
  }
};
