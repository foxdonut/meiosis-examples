import m from "mithril";
import { nestComponent } from "../util";
import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
import { randomGifPairPair } from "../random-gif-pair-pair";
import { randomGifList } from "../random-gif-list";
import { randomGifCounter } from "../random-gif-counter";

export const app = {
  model: () => ({
    counter: counter.model("Total Counter"),
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
      counter: nestComponent(counter.create, update, "counter"),
      button: nestComponent(button.create, update, "button"),
      randomGif1: nestComponent(randomGif.create, update, "randomGif1", events.randomGif),
      randomGif2: nestComponent(randomGif.create, update, "randomGif2", events.randomGif),
      randomGifPair: nestComponent(randomGifPair.create, update, "randomGifPair", events.randomGif),
      randomGifPairPair: nestComponent(randomGifPairPair.create, update, "randomGifPairPair", events.randomGif),
      randomGifList: nestComponent(randomGifList.create, update, "randomGifList", events.randomGif),
      randomGifCounter1: nestComponent(randomGifCounter.create, update, "randomGifCounter1", events.randomGifCounter1),
      randomGifCounter2: nestComponent(randomGifCounter.create, update, "randomGifCounter2", events.randomGifCounter2)
     };

    return model =>
      [
        components.counter(model),

        m("div.mt2", "Button:"),
        components.button(model),

        m("div.mt2", "Random Gif:"),
        components.randomGif1(model),

        m("div.mt2", "Another Random Gif:"),
        components.randomGif2(model),

        m("div.mt2", "Random Gif Pair:"),
        components.randomGifPair(model),

        m("div.mt2", "Random Gif Pair Pair:"),
        components.randomGifPairPair(model),

        m("div.mt2", "Random Gif List:"),
        components.randomGifList(model),

        m("div.mt2", "Random Gif with Counter (doesn't count in total):"),
        components.randomGifCounter1(model),

        m("div.mt2", "Another Random Gif with Counter (counts in total):"),
        components.randomGifCounter2(model),

        components.counter(model)
    ];
  }
};
