import m from "mithril";
import { createComponents, combineComponents } from "../util/nest";
import { createRandomGifPair } from "../random-gif-pair";

export const createRandomGifPairPair = event => update => {
  const components = createComponents(update, {
    randomGifPairOne: createRandomGifPair(event),
    randomGifPairTwo: createRandomGifPair(event)
  });

  return {
    model: combineComponents(components, "model"),
    view: model => m("div.ba.br2.b--orange.pa2",
      components.randomGifPairOne.view(model),
      components.randomGifPairTwo.view(model)
    )
  };
};
