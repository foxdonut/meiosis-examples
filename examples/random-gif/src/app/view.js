import m from "mithril";
import { counter } from "../counter";
import { button } from "../button";
import { randomGif } from "../random-gif";
/*
import { randomGifPairView } from "../random-gif-pair/view";
import { randomGifPairPairView } from "../random-gif-pair-pair/view";
import { randomGifListView } from "../random-gif-list/view";
*/

export const view = (model, actions) =>
  m("div",
    m("ul.nav.nav-pills",
      m("li.active", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-m.html" }, "Mithril + m version")
      ),
      m("li", { role: "presentation" },
        m("a.btn.btn-xs.btn-default", { href: "index-jsx.html" }, "Mithril + JSX version")
      )
    ),
    counter.view(model.counter, actions.counter),
    m("div", "Button:"),
    button.view(model.button, actions.button),
    m("div", "Random Gif:"),
    randomGif.view(model.randomGif1, actions.randomGif1),
    m("div", "Another Random Gif:"),
    randomGif.view(model.randomGif2, actions.randomGif2),
    m("div", "Random Gif Pair:")/*,
    randomGifPairView(model.randomGifPair, actions.randomGifPair),
    m("div", "Random Gif Pair Pair:"),
    randomGifPairPairView(model.randomGifPairPair, actions.randomGifPairPair),
    m("div", "Random Gif List:"),
    randomGifListView(model.randomGifList, actions.randomGifList)*/
  );
