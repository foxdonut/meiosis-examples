import m from "mithril";
import { merge } from "ramda";
import { randomGif } from "../random-gif";

export const view = actions => (model, update) => {
  const renderRandomGif = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGif.view(model.randomGifsById[id], mdl => update(merge(model, { randomGifsById: merge(model.randomGifsById, { [id]: mdl }) }))),
      m("button.btn.btn-default.btn-xs", { onclick: actions.remove(model, update, id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: actions.add(model, update) }, "Add")
    ]),
    m("div", model.randomGifIds.map(renderRandomGif))
  ]);
};
