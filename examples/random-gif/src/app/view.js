import m from "mithril";
import { counterView } from "../counter/view";
import { buttonView } from "../button/view";
import { randomGifView } from "../random-gif/view";
import { randomGifPairView } from "../random-gif-pair/view";
import { randomGifPairPairView } from "../random-gif-pair-pair/view";
import { randomGifListView } from "../random-gif-list/view";

export const view = model =>
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
    randomGifView(model.randomGif1),
    m("div", "Another Random Gif:"),
    randomGifView(model.randomGif2),
    m("div", "Random Gif Pair:"),
    randomGifPairView(model.randomGifPair),
    m("div", "Random Gif Pair Pair:"),
    randomGifPairPairView(model.randomGifPairPair),
    m("div", "Random Gif List:"),
    randomGifListView(model.randomGifList)
  );
