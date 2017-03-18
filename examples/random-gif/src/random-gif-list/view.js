import m from "mithril";
import { lensPath, over } from "ramda";
import { randomGif } from "../random-gif";

export const view = actions => (model, update, events) => {
  const renderRandomGif = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGif.view(
        model.randomGifsById[id],
        modelChange => update(over(lensPath(["randomGifsById", id]), modelChange)),
        events.randomGif
      ),
      m("button.btn.btn-default.btn-xs", { onclick: actions.remove(update, id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: actions.add(update) }, "Add")
    ]),
    m("div", model.randomGifIds.map(renderRandomGif))
  ]);
};
