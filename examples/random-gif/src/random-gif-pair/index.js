import m from "mithril";
import { nest } from "../util";
import { randomGif } from "../random-gif";

export const randomGifPair = {
  model: () => ({
    randomGifFirst: randomGif.model(),
    randomGifSecond: randomGif.model()
  }),
  view: (model, update, events) =>
    m("div",
      m("div", { style: "display: inline-block" },
        randomGif.view(model.randomGifFirst, nest(update, "randomGifFirst"), events.randomGif)),
      m("div", { style: "display: inline-block" },
        randomGif.view(model.randomGifSecond, nest(update, "randomGifSecond"), events.randomGif))
    )
};
