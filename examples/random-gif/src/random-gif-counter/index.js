import { randomGif } from "../random-gif";
import { counter } from "../counter";
import { view } from "./view";

export const randomGifCounter = {
  model: () => ({
    randomGif: randomGif.model(),
    counter: counter.model()
  }),
  view
};
