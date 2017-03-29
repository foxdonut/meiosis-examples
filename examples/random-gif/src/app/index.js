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
  create: (update, events) => {
    const counterView = counter.create("Total Counter: ");
    const buttonView = button.create(nest(update, "button"));
    const randomGif1View = randomGif.create(nest(update, "randomGif1"), events.randomGif);
    const randomGif2View = randomGif.create(nest(update, "randomGif2"), events.randomGif);
    const randomGifPairView = randomGifPair.create(nest(update, "randomGifPair"), events.randomGif);
    const randomGifPairPairView = randomGifPairPair.create(nest(update, "randomGifPairPair"), events.randomGif);
    const randomGifListView = randomGifList.create(nest(update, "randomGifList"), events.randomGif);
    const randomGifCounter1View = randomGifCounter.create(nest(update, "randomGifCounter1"), events.randomGifCounter1);
    const randomGifCounter2View = randomGifCounter.create(nest(update, "randomGifCounter2"), events.randomGifCounter2);

    return model =>
      [
        counterView(model.counter),

        m("div.mt2", "Button:"),
        buttonView(model.button),

        m("div.mt2", "Random Gif:"),
        randomGif1View(model.randomGif1),

        m("div.mt2", "Another Random Gif:"),
        randomGif2View(model.randomGif2),

        m("div.mt2", "Random Gif Pair:"),
        randomGifPairView(model.randomGifPair),

        m("div.mt2", "Random Gif Pair Pair:"),
        randomGifPairPairView(model.randomGifPairPair),

        m("div.mt2", "Random Gif List:"),
        randomGifListView(model.randomGifList),

        m("div.mt2", "Random Gif with Counter (doesn't count in total):"),
        randomGifCounter1View(model.randomGifCounter1),

        m("div.mt2", "Another Random Gif with Counter (counts in total):"),
        randomGifCounter2View(model.randomGifCounter2),

        counterView(model.counter)
    ];
  }
};
