import m from "mithril";
import stream from "mithril/stream";
import { add, lensPath, over } from "ramda";

import { nestComponent } from "../util";
import { randomGif } from "../random-gif";
import { counter } from "../counter";

export const randomGifCounter = {
  model: () => ({
    randomGif: randomGif.model(),
    counter: counter.model("Counter")
  }),
  create: ({ event, localOnly }) => update => {
    const localEvent = stream();

    localEvent.map(evt => {
      update(over(lensPath(["counter", "value"]), add(1)));

      if (!localOnly) {
        event(evt);
      }
    });

    const components = {
      randomGif: nestComponent(randomGif.create(localEvent), update, ["randomGif"]),
      counter: nestComponent(counter.create, update, ["counter"])
    };

    return model => m("div.ba.br2.b--orange.pa2",
      components.randomGif(model),
      components.counter(model)
    );
  }
};
