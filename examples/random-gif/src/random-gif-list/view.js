import m from "mithril";
import { randomGifView } from "../random-gif/view";
import { add, remove } from "./actions";

export const randomGifListView = (model, update) => {
  const renderRandomGif = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGifView(model.randomGifsById[id]),
      m("button.btn.btn-default.btn-xs", { onclick: remove(update, id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: add(update) }, "Add")
    ]),
    m("div", model.randomGifIds.map(renderRandomGif))
  ]);
};
