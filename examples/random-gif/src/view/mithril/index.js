import m from "mithril";
import { counter } from "./counter";
import { createButton } from "./button";
import { createRandomGif } from "./random-gif";
import { createRandomGifPair } from "./random-gif-pair";
import { createRandomGifPairPair } from "./random-gif-pair-pair";
import { createRandomGifList } from "./random-gif-list";

export const createView = ({ buttonActions, randomGifActions, randomGifListActions }) => {
  const button = createButton({ actions: buttonActions });
  const randomGif = createRandomGif({ actions: randomGifActions });
  const randomGifPair = createRandomGifPair({ randomGif });
  const randomGifPairPair = createRandomGifPairPair({ randomGifPair });
  const randomGifList = createRandomGifList({ actions: randomGifListActions, randomGif });

  return model =>
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
};
