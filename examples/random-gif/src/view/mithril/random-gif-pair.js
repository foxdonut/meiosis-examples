import m from "mithril";
import { view as randomGif } from "./random-gif";

export const view = model =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifFirst)),
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifSecond))
  );
