import m from "mithril";
import { merge } from "ramda";
import { randomGif } from "../random-gif";

export const view = (model, update, events) =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGif.view(model.randomGifFirst, mdl => update(merge(model, { randomGifFirst: mdl })), events.randomGif)),
    m("div", { style: "display: inline-block" },
      randomGif.view(model.randomGifSecond, mdl => update(merge(model, { randomGifSecond: mdl })), events.randomGif))
  );
