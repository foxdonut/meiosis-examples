import m from "mithril";
import { createComponents, combineComponents } from "../util/nest";
import { createCounter } from "../counter";
import { createButton } from "../button";
import { createRandomGif } from "../random-gif";
import { createRandomGifPair } from "../random-gif-pair";
import { createRandomGifPairPair } from "../random-gif-pair-pair";
import { createRandomGifList } from "../random-gif-list";
import { createRandomGifCounter } from "../random-gif-counter";

export const createApp = event => update => {
  const components = createComponents(update, {
    counter: createCounter("Total Counter"),
    button: createButton,
    randomGif1: createRandomGif(event, "randomGif1"),
    randomGif2: createRandomGif(event),
    randomGifPair: createRandomGifPair(event),
    randomGifPairPair: createRandomGifPairPair(event),
    randomGifList: createRandomGifList(event),
    randomGifCounter1: createRandomGifCounter({ event, localOnly: true }),
    randomGifCounter2: createRandomGifCounter({ event })
  });

  return {
    model: combineComponents(components, "model"),

    view: model => [
        components.counter.view(model),

        m("div.mt2", "Button:"),
        components.button.view(model),

        m("div.mt2", "Random Gif:"),
        components.randomGif1.view(model),

        m("div.mt2", "Another Random Gif:"),
        components.randomGif2.view(model),

        m("div.mt2", "Random Gif Pair:"),
        components.randomGifPair.view(model),

        m("div.mt2", "Random Gif Pair Pair:"),
        components.randomGifPairPair.view(model),

        m("div.mt2", "Random Gif List:"),
        components.randomGifList.view(model),

        m("div.mt2", "Random Gif with Counter (doesn't count in total):"),
        components.randomGifCounter1.view(model),

        m("div.mt2", "Another Random Gif with Counter (counts in total):"),
        components.randomGifCounter2.view(model),

        components.counter.view(model)
    ]
  };
};
