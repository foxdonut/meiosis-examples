import m from "mithril";
import { counter } from "./counter";
import { button } from "./button";
import { randomGif } from "./random-gif";
import { randomGifPair } from "./random-gif-pair";
import { randomGifPairPair } from "./random-gif-pair-pair";
import { randomGifList } from "./random-gif-list";

export const view = model =>
  m("div",
    m("div", "Mithril"),
    counter(model.counter),
    m("div", "Button:"),
    button(model.button),
    m("div", "Random Gif:"),
    randomGif(model.randomGif1),
    m("div", "Another Random Gif:"),
    randomGif(model.randomGif2),
    m("div", "Random Gif Pair:"),
    randomGifPair(model.randomGifPair),
    m("div", "Random Gif Pair Pair:"),
    randomGifPairPair(model.randomGifPairPair),
    m("div", "Random Gif List:"),
    randomGifList(model.randomGifList)
  );
