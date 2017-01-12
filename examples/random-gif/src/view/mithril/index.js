import m from "mithril";
import { counterView } from "./counter";
import { buttonView } from "./button";
import { randomGifView } from "./random-gif";
import { randomGifPairView } from "./random-gif-pair";
import { randomGifPairPairView } from "./random-gif-pair-pair";
import { randomGifListView } from "./random-gif-list";

export const view = model =>
  m("div",
    m("div", "Mithril"),
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
