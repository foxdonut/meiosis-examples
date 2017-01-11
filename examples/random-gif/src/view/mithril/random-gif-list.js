import m from "mithril";

export const createRandomGifList = ({ actions, randomGif }) => model => {
  const randomGifView = id =>
    m("div", { key: id, style: "display: inline-block" }, [
      randomGif(model.randomGifsById[id]),
      m("button.btn.btn-default.btn-xs", { onclick: actions.onRemove(id) }, "Remove")
    ]);

  return m("div", [
    m("div", [
      m("button.btn.btn-default.btn-xs", { onclick: actions.onAdd }, "Add")
    ]),
    m("div", model.randomGifIds.map(randomGifView))
  ]);
};

