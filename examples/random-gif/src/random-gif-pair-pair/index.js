import m from "mithril";
import { nestComponent } from "../util";
import { randomGifPair } from "../random-gif-pair";

export const randomGifPairPair = {
  model: () => ({
    randomGifPairOne: randomGifPair.model(),
    randomGifPairTwo: randomGifPair.model()
  }),
  create: event => update => {
    const randomGifPairOne = nestComponent(randomGifPair.create(event), update, ["randomGifPairOne"]);
    const randomGifPairTwo = nestComponent(randomGifPair.create(event), update, ["randomGifPairTwo"]);

    return model => m("div.ba.br2.b--orange.pa2",
      randomGifPairOne(model),
      randomGifPairTwo(model)
    )
  }
};
