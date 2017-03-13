import m from "mithril";
import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
import { randomGifPair } from "../random-gif-pair";
/*
import { randomGifPairPairView } from "../random-gif-pair-pair/view";
import { randomGifListView } from "../random-gif-list/view";
*/

export const view = (model, update) =>
  m("div",
    m("ul.nav.nav-pills",
      m("li.active", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-m.html" }, "Mithril + m version")
      ),
      m("li", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-jsx.html" }, "Mithril + JSX version")
      )
    ),
    counter.view(model.counter, model => update({ counter: model })),
    m("div", "Button:"),
    button.view(model.button, model => update({ button: model })),
    m("div", "Random Gif:"),
    randomGif.view(model.randomGif1, model => update({ randomGif1: model })),
    m("div", "Another Random Gif:"),
    randomGif.view(model.randomGif2, model => update({ randomGif2: model })),
    m("div", "Random Gif Pair:"),
    randomGifPair.view(model.randomGifPair, model => update({ randomGifPair: model }))/*,
    m("div", "Random Gif Pair Pair:"),
    randomGifPairPairView(model.randomGifPairPair, actions.randomGifPairPair),
    m("div", "Random Gif List:"),
    randomGifListView(model.randomGifList, actions.randomGifList)*/
  );
