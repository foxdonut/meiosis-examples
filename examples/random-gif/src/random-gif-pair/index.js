import m from "mithril";
import { createComponents, combineComponents } from "../util/nest";
import { createRandomGif } from "../random-gif";

export const createRandomGifPair = event => update => {
  const components = createComponents(update, {
    randomGifFirst: createRandomGif(event),
    randomGifSecond: createRandomGif(event)
  });

  return {
    model: combineComponents(components, "model"),
    view: model => m("div.br2.ba.b--purple.pa2.mb2",
      m("div.dib", components.randomGifFirst.view(model)),
      m("div.dib", components.randomGifSecond.view(model))
    )
  }
};
