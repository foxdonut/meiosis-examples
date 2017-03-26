import m from "mithril";
import { nest } from "../util";
import { randomGifPair } from "../random-gif-pair";

export const randomGifPairPair = {
  model: () => ({
    randomGifPairOne: randomGifPair.model(),
    randomGifPairTwo: randomGifPair.model()
  }),
  create: (update, events) => {
    const randomGifPairOne = randomGifPair.create(nest(update, "randomGifPairOne"), events);
    const randomGifPairTwo = randomGifPair.create(nest(update, "randomGifPairTwo"), events);

    return model => m("div",
      randomGifPairOne(model.randomGifPairOne),
      randomGifPairTwo(model.randomGifPairTwo)
    )
  }
};
