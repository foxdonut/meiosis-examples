const b = require("bss")
const { button } = require("../util/ui")
const RandomGif = require("../random-gif")
const { nestUpdate } = require("../util/nest")

exports.createView = (actions, update) => {
  const renderRandomGif = model =>
    ["div" + b.d("inline-block").mr(8), { key: model.id },
      RandomGif.view(model, nestUpdate(update, ["randomGifsById", model.id])),
      ["button" + button.bc("red"), { onclick: () => actions.remove(model.id) }, "Remove"]
    ]

  return model =>
    ["div" + b.border("1px solid blue").p(8).mt(4),
      ["div", "Has gifs: ", model.hasGifs ? "Yes" : "No"],
      ["button" + button.bc("green"), { onclick: () => actions.add() }, "Add"],
      ["button" + button.bc("red"), { onclick: () => actions.resetAll(model.randomGifIds) }, "Reset All"],
      ["div", model.randomGifIds.map(id => renderRandomGif(model.randomGifsById[id]))]
    ]
}
