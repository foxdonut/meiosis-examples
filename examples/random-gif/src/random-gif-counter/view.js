import m from "mithril";
import { add, lensPath, over } from "ramda";
import { nest } from "../util";
import { randomGif } from "../random-gif";
import { counter } from "../counter";

export const view = (model, update) => m("div.panel.panel-default",
  randomGif.view(model.randomGif, nest(update, "randomGif"), {
    newGifSuccess: () => update(over(lensPath(["counter", "value"]), add(1)))
  }),
  counter.view(model.counter, nest(update, "counter"))
);
