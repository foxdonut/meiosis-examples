const m = require("mithril");
const b = require("bss");
const { button } = require("../util/ui");

exports.createView = (actions, randomGif) => {
  const renderRandomGif = model =>
    m("div" + b.d("inline-block").mr(8), { key: model.id }, [
      randomGif.view(model),
      m("button" + button.bc("red"), { onclick: () => actions.remove(model.id) }, "Remove")
    ]);

  return model =>
    m("div" + b.border("1px solid blue").p(8).mt(4), [
      m("div", "Has gif(s): ", model.hasGifs ? "Yes" : "No"),
      m("button" + button.bc("green"), { onclick: actions.add }, "Add"),
      m("button" + button.bc("red"), { onclick: () => actions.resetAll() }, "Reset All"),
      m("div", model.randomGifs.map(renderRandomGif))
    ]);
};
