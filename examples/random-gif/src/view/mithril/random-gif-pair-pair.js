import m from "mithril";
import { view as randomGifPair } from "./random-gif-pair";

export const view = model =>
  m("div",
    randomGifPair(model.randomGifPairOne, "randomGifPairOne"),
    randomGifPair(model.randomGifPairTwo, "randomGifPairTwo")
  );
