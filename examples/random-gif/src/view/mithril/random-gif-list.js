import m from "mithril";
import { actions } from "../../random-gif-list";
import { view as randomGif } from "./random-gif";

export const view = model => {
  const onAdd = evt => {
    evt.preventDefault();
    actions.addToRandomGifList();
  };

  const onRemove = id => evt => {
    evt.preventDefault();
    actions.removeFromRandomGifList(id);
  };

  const randomGifView = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGif(model.randomGifsById[id], id),
      m("button.btn.btn-default.btn-xs", { onclick: onRemove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: onAdd }, "Add")
    ]),
    m("div", model.randomGifIds.map(randomGifView))
  ]);
};

