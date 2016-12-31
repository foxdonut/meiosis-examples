import m from "mithril";
import { view as counter } from "./counter";

export const view = model =>
  m("div",
    m("div", "Mithril"),
    m("div", "Counter:"),
    counter(model)
  );/*,
    m("div", "Button:"),
    components.button(model),
    m("div", "Random Gif:"),
    components.randomGif1(model),
    m("div", "Another Random Gif:"),
    components.randomGif2(model),
    m("div", "Random Gif Pair:"),
    components.randomGifPair(model),
    m("div", "Random Gif Pair Pair:"),
    components.randomGifPairPair(model),
    m("div", "Random Gif List:"),
    components.randomGifList(model)
    */
