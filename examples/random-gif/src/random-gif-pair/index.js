import m from "mithril";
import { nest } from "../util";
import { randomGif } from "../random-gif";

export const randomGifPair = {
  model: () => ({
    randomGifFirst: randomGif.model(),
    randomGifSecond: randomGif.model()
  }),
  create: (update, events) => {
    const randomGifFirst = randomGif.create(nest(update, "randomGifFirst"), events);
    const randomGifSecond = randomGif.create(nest(update, "randomGifSecond"), events);

    return model => m("div.br2.ba.b--purple.pa2.mb2",
      m("div.dib",
        randomGifFirst(model.randomGifFirst)),
      m("div.dib",
        randomGifSecond(model.randomGifSecond))
    );
  }
};
