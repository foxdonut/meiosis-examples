import m from "mithril";
import { randomGifView } from "./random-gif";
import { randomGifListIntents } from "../events/random-gif-list";

export const randomGifListView = model => {
  const renderRandomGif = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGifView(model.randomGifsById[id]),
      m("button.btn.btn-default.btn-xs", { onclick: randomGifListIntents.remove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: randomGifListIntents.add }, "Add")
    ]),
    m("div", model.randomGifIds.map(renderRandomGif))
  ]);
};
