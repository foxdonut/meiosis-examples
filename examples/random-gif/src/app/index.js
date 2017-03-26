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
    const counterView = counter.create(nest(update, "counter"));
    const buttonView = button.create(nest(update, "button"));
    const randomGif1View = randomGif.create(nest(update, "randomGif1"), events.randomGif);
    const randomGif2View = randomGif.create(nest(update, "randomGif2"), events.randomGif);
    const randomGifPairView = randomGifPair.create(nest(update, "randomGifPair"), events.randomGif);
    const randomGifPairPairView = randomGifPairPair.create(nest(update, "randomGifPairPair"), events.randomGif);
    const randomGifListView = randomGifList.create(nest(update, "randomGifList"), events.randomGif);
    const randomGifCounter1View = randomGifCounter.create(nest(update, "randomGifCounter1"), events.randomGifCounter1);
    const randomGifCounter2View = randomGifCounter.create(nest(update, "randomGifCounter2"), events.randomGifCounter2);

    return model =>
      m("div",
        m("ul.nav.nav-pills",
          m("li.active", { role: "presentation" },
            m("a.btn.btn-xs.btn-default", { href: "index-m.html" }, "Mithril + m version")
          ),
          m("li", { role: "presentation" },
            m("a.btn.btn-xs.btn-default", { href: "index-jsx.html" }, "Mithril + JSX version")
          )
        ),
        counterView(model.counter),

        m("div", "Button:"),
        buttonView(model.button),

        m("div", "Random Gif:"),
        randomGif1View(model.randomGif1),

        m("div", "Another Random Gif:"),
        randomGif2View(model.randomGif2),

        m("div", "Random Gif Pair:"),
        randomGifPairView(model.randomGifPair),

        m("div", "Random Gif Pair Pair:"),
        randomGifPairPairView(model.randomGifPairPair),

        m("div", "Random Gif List:"),
        randomGifListView(model.randomGifList),

        m("div", "Random Gif with Counter (doesn't count in total):"),
        randomGifCounter1View(model.randomGifCounter1),

        m("div", "Another Random Gif with Counter (counts in total):"),
        randomGifCounter2View(model.randomGifCounter2)
      );
  }
};
