import m from "mithril";
import { nest } from "../util";
import { randomGifPair } from "../random-gif-pair";

export const view = (model, update, events) =>
  m("div",
    randomGifPair.view(model.randomGifPairOne, nest(update, "randomGifPairOne"), events),
    randomGifPair.view(model.randomGifPairTwo, nest(update, "randomGifPairTwo"), events)
  );
