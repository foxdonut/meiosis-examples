import m from "mithril";
import { randomGifView } from "./random-gif";

export const randomGifPairView = model =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGifView(model.randomGifFirst)),
    m("div", { style: "display: inline-block" },
      randomGifView(model.randomGifSecond))
  );
