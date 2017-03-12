import m from "mithril";
import { randomGifPairView } from "../random-gif-pair/view";

export const randomGifPairPairView = model =>
  m("div",
    randomGifPairView(model.randomGifPairOne),
    randomGifPairView(model.randomGifPairTwo)
  );
