import { randomGif } from "../random-gif";
import { view } from "./view";

export const randomGifPair = {
  model: () => ({
    randomGifFirst: randomGif.model(),
    randomGifSecond: randomGif.model()
  }),
  view
};
