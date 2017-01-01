import m from "mithril";
import { view as counter } from "./counter";
import { view as button } from "./button";
import { view as randomGif } from "./random-gif";
import { view as randomGifPair } from "./random-gif-pair";
import { view as randomGifPairPair } from "./random-gif-pair-pair";
import { view as randomGifList } from "./random-gif-list";

export const view = model =>
  m("div",
    m("div", "Mithril"),
    counter(model.counter),
    m("div", "Button:"),
    button(model.button),
    m("div", "Random Gif:"),
    randomGif(model.randomGif1, "randomGif1"),
    m("div", "Another Random Gif:"),
    randomGif(model.randomGif2, "randomGif2"),
    m("div", "Random Gif Pair:"),
    randomGifPair(model.randomGifPair, "randomGifPair"),
    m("div", "Random Gif Pair Pair:"),
    randomGifPairPair(model.randomGifPairPair),
    m("div", "Random Gif List:"),
    randomGifList(model.randomGifList)
  );
