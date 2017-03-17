import m from "mithril";
import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
import { randomGifPairPair } from "../random-gif-pair-pair";
import { randomGifList } from "../random-gif-list";
import { randomGifCounter } from "../random-gif-counter";

export const view = (model, update, events) =>
  m("div",
    m("ul.nav.nav-pills",
      m("li.active", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-m.html" }, "Mithril + m version")
      ),
      m("li", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-jsx.html" }, "Mithril + JSX version")
      )
    ),
    counter.view(model.counter, mdl => update({ counter: mdl })),
    m("div", "Button:"),
    button.view(model.button, mdl => update({ button: mdl })),
    m("div", "Random Gif:"),
    randomGif.view(model.randomGif1, mdl => update({ randomGif1: mdl }), events.randomGif),
    m("div", "Another Random Gif:"),
    randomGif.view(model.randomGif2, mdl => update({ randomGif2: mdl }), events.randomGif),
    m("div", "Random Gif Pair:"),
    randomGifPair.view(model.randomGifPair, mdl => update({ randomGifPair: mdl }), events),
    m("div", "Random Gif Pair Pair:"),
    randomGifPairPair.view(model.randomGifPairPair, mdl => update({ randomGifPairPair: mdl}), events),
    m("div", "Random Gif List:"),
    randomGifList.view(model.randomGifList, mdl => update({ randomGifList: mdl })),
    m("div", "Random Gif with Counter:"),
    randomGifCounter.view(model.randomGifCounter, mdl => update({randomGifCounter: mdl }))
  );
