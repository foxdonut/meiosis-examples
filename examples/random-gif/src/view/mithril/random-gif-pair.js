import m from "mithril";
import { view as randomGif } from "./random-gif";

export const view = (model, id) =>
  m("div",
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifFirst, id + "_randomGifFirst")),
    m("div", { style: "display: inline-block" },
      randomGif(model.randomGifSecond, id + "_randomGifSecond"))
  );
