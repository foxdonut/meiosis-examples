import m from "mithril";
import { add } from "ramda";
import { modify, nestComponent } from "../util";
import { randomGif } from "../random-gif";
import { counter } from "../counter";

export const randomGifCounter = {
  model: () => ({
    randomGif: randomGif.model(),
    counter: counter.model("Counter")
  }),
  create: (update, events) => {
    const components = {
      randomGif: nestComponent(randomGif.create, update, "randomGif", events.randomGif),
      counter: nestComponent(counter.create, update, "counter")
    };

    events.randomGif.newGifSuccess.map(() => update(modify(["counter", "value"], add(1))));

    return model => m("div.ba.br2.b--orange.pa2",
      components.randomGif(model),
      components.counter(model)
    );
  }
};
