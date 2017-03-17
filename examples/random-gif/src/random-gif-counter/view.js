import m from "mithril";
import { merge } from "ramda";
import { randomGif } from "../random-gif";
import { counter } from "../counter";

export const view = (model, update) => m("div.panel.panel-default",
  randomGif.view(
    model.randomGif,
    mdl => update(merge(model, { randomGif: mdl })),
    { newGifSuccess: () => update(merge(model, { counter: merge(model.counter, { value: model.counter.value + 1 }) }))
    }
  ),
  counter.view(
    model.counter,
    mdl => update(merge(model, { counter: mdl }))
  )
);
