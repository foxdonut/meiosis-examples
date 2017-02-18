import m from "mithril";
import { randomGifView } from "../random-gif/view";
import { intents } from "./actions";

export const randomGifListView = model => {
  const renderRandomGif = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGifView(model.randomGifsById[id]),
      m("button.btn.btn-default.btn-xs", { onclick: intents.remove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: intents.add }, "Add")
    ]),
    m("div", model.randomGifIds.map(renderRandomGif))
  ]);
};
