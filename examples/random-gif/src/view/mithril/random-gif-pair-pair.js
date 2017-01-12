import m from "mithril";
import { randomGifPairView } from "./random-gif-pair";

export const randomGifPairPairView = model =>
  m("div",
    randomGifPairView(model.randomGifPairOne),
    randomGifPairView(model.randomGifPairTwo)
  );
