import m from "mithril";
import { merge } from "ramda";
import { randomGif } from "../random-gif";

export const view = (model, update) =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGif.view(model.randomGifFirst, mdl => update(merge(model, { randomGifFirst: mdl })))),
    m("div", { style: "display: inline-block" },
      randomGif.view(model.randomGifSecond, mdl => update(merge(model, { randomGifSecond: mdl }))))
  );
