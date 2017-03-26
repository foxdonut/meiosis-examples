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
    const randomGifView = randomGif.create(nest(update, "randomGif"), events);
    const counterView = counter.create(nest(update, "randomGif"), events);

    events.newGifSuccess.map(() => update(over(lensPath(["counter", "value"]), add(1))));

    return model => m("div.panel.panel-default",
      randomGifView(model.randomGif),
      counterView(model.counter)
    );
  }
};
