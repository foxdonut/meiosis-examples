import { randomGifPair } from "../random-gif-pair";
import { view } from "./view";

export const randomGifPairPair = {
  model: () => ({
    randomGifPairOne: randomGifPair.model(),
    randomGifPairTwo: randomGifPair.model()
  }),
  view
};
