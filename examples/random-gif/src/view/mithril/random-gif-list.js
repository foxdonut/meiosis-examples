import m from "mithril";
import { handlers } from "../../random-gif-list";
import { view as randomGif } from "./random-gif";

export const view = model => {
  const randomGifView = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGif(model.randomGifsById[id], id),
      m("button.btn.btn-default.btn-xs", { onclick: handlers.onRemove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: handlers.onAdd }, "Add")
    ]),
    m("div", model.randomGifIds.map(randomGifView))
  ]);
};

