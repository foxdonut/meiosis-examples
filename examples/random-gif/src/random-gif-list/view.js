const { button } = require("../util/ui")

exports.createView = ({ actions, randomGifView }) => {
  const renderRandomGif = (model, id, subId) =>
    ["div.dib.mr2", { key: id },
      randomGifView(model, subId),
      ["button.bg-red" + button, { onclick: () => actions.remove(id, subId) }, "Remove"]
    ]

  return (model, id) =>
    ["div.ba.b--blue.pa2.mt2",
      ["div", "Has gifs: ", model[id].hasGifs ? "Yes" : "No"],
      ["button.bg-green"  + button, { onclick: () => actions.add(id) }, "Add"],
      ["button.bg-red" + button, { onclick: () => actions.resetAll(model[id].randomGifIds) },
        "Reset All"],
      ["div", model[id].randomGifIds.map(subId => renderRandomGif(model, id, subId))]
    ]
}
