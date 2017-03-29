import m from "mithril";
import { add, lensPath, over } from "ramda";
import { nest } from "../util";
import { randomGif } from "../random-gif";
import { counter } from "../counter";

export const randomGifCounter = {
  model: () => ({
    randomGif: randomGif.model(),
    counter: counter.model()
  }),
  create: (update, events) => {
    const randomGifView = randomGif.create(nest(update, "randomGif"), events.randomGif);
    const counterView = counter.create("Counter: ");

    events.randomGif.newGifSuccess.map(() => update(over(lensPath(["counter", "value"]), add(1))));

    return model => m("div.ba.br2.b--orange.pa2",
      randomGifView(model.randomGif),
      counterView(model.counter)
    );
  }
};
