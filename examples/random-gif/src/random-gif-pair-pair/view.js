import m from "mithril";
import { merge } from "ramda";
import { randomGifPair } from "../random-gif-pair";

export const view = (model, update, events) =>
  m("div",
    randomGifPair.view(model.randomGifPairOne, mdl => update(merge(model, { randomGifPairOne: mdl })), events),
    randomGifPair.view(model.randomGifPairTwo, mdl => update(merge(model, { randomGifPairTwo: mdl })), events)
  );
