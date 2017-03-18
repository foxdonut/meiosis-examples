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
  view: (model, update, events) =>
    m("div",
      m("ul.nav.nav-pills",
        m("li.active", { role: "presentation" },
          m("a.btn.btn-xs.btn-default", { href: "index-m.html" }, "Mithril + m version")
        ),
        m("li", { role: "presentation" },
          m("a.btn.btn-xs.btn-default", { href: "index-jsx.html" }, "Mithril + JSX version")
        )
      ),
      counter.view(model.counter, nest(update, "counter")),
      m("div", "Button:"),
      button.view(model.button, nest(update, "button")),
      m("div", "Random Gif:"),
      randomGif.view(model.randomGif1, nest(update, "randomGif1"), events.randomGif),
      m("div", "Another Random Gif:"),
      randomGif.view(model.randomGif2, nest(update, "randomGif2"), events.randomGif),
      m("div", "Random Gif Pair:"),
      randomGifPair.view(model.randomGifPair, nest(update, "randomGifPair"), events),
      m("div", "Random Gif Pair Pair:"),
      randomGifPairPair.view(model.randomGifPairPair, nest(update, "randomGifPairPair"), events),
      m("div", "Random Gif List:"),
      randomGifList.view(model.randomGifList, nest(update, "randomGifList"), events),
      m("div", "Random Gif with Counter (doesn't count in total):"),
      randomGifCounter.view(model.randomGifCounter1, nest(update, "randomGifCounter1")),
      m("div", "Another Random Gif with Counter (counts in total):"),
      randomGifCounter.view(model.randomGifCounter2, nest(update, "randomGifCounter2"), events.randomGif)
    )
  };
