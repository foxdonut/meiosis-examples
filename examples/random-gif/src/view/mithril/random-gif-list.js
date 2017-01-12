import m from "mithril";
import { randomGifView } from "./random-gif";
import { randomGifList } from "../../random-gif-list";

export const randomGifListView = model => {
  const renderRandomGif = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGifView(model.randomGifsById[id]),
      m("button.btn.btn-default.btn-xs", { onclick: () => randomGifList.intents.remove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: randomGifList.intents.add }, "Add")
    ]),
    m("div", model.randomGifIds.map(renderRandomGif))
  ]);
};
