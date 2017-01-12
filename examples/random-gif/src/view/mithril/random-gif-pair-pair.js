import m from "mithril";
import { randomGifPair } from "./random-gif-pair";

export const randomGifPairPair = model =>
  m("div",
    randomGifPair(model.randomGifPairOne),
    randomGifPair(model.randomGifPairTwo)
  );
