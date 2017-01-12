import m from "mithril";
import { randomGif } from "./random-gif";
import { randomGifListIntents } from "../../random-gif-list";

export const randomGifList = model => {
  const randomGifView = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGif(model.randomGifsById[id]),
      m("button.btn.btn-default.btn-xs", { onclick: () => randomGifListIntents.remove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: randomGifListIntents.add }, "Add")
    ]),
    m("div", model.randomGifIds.map(randomGifView))
  ]);
};
