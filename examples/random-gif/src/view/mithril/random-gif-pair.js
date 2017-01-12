import m from "mithril";
import { randomGif } from "./random-gif";

export const randomGifPair = model =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifFirst)),
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifSecond))
  );
