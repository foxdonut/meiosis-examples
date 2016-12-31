import m from "mithril";
import { view as counter } from "./counter";
import { view as button } from "./button";

export const view = model =>
  m("div",
    m("div", "Mithril"),
    counter(model.counter),
    m("div", "Button:"),
    button(model.button)
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
