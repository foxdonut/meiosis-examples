import m from "mithril";
import { nestComponent } from "../util";
import { randomGif } from "../random-gif";

export const createRandomGifPair = event => update => {
  const randomGifFirst = nestComponent(randomGif.create(event), update, ["randomGifFirst"]);
  const randomGifSecond = nestComponent(randomGif.create(event), update, ["randomGifSecond"]);

  return {
    model: () => ({
      randomGifFirst: randomGif.model(),
      randomGifSecond: randomGif.model()
    }),
    view: model => m("div.br2.ba.b--purple.pa2.mb2",
      m("div.dib", randomGifFirst(model)),
      m("div.dib", randomGifSecond(model))
    )
  }
};
