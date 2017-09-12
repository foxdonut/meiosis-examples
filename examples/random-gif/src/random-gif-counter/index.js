import m from "mithril";
import stream from "mithril/stream";
import { add, lensPath, over } from "ramda";

import { createComponents, combineComponents } from "../util/nest";
import { createRandomGif } from "../random-gif";
import { createCounter } from "../counter";

export const createRandomGifCounter = ({ event, localOnly }) => update => {
  const localEvent = stream();

  localEvent.map(evt => {
    update(over(lensPath(["counter", "value"]), add(1)));

    if (!localOnly) {
      event(evt);
    }
  });

  const components = createComponents(update, {
    randomGif: createRandomGif(localEvent),
    counter: createCounter("Counter")
  });

  return {
    model: combineComponents(components, "model"),
    view: model =>
      m("div.ba.br2.b--orange.pa2",
        components.randomGif.view(model),
        components.counter.view(model)
      )
  };
};
