const m = require("mithril")
const O = require("patchinko/constant")
const R = require("ramda")

const { button } = require("../util/ui")
const { actions } = require("./actions")

const { RandomGif } = require("../random-gif")

exports.randomGifList = {
  model: () => ({
    randomGifIds: []
  }),
  actions,
  state: model => ({
    randomGifList: O({
      hasGifs: R.any(
        R.equals("Y"),
        R.map(R.path(["image", "value", "value", "case"]),
          R.map(id => R.prop(id, model), model.randomGifList.randomGifIds)
        )
      )
    })
  })
}

const RandomGifItem = {
  view: ({ attrs: { model, id, subId, actions } }) =>
    m("div.dib.mr2", { key: id },
      m(RandomGif, { model, id: subId, actions }),
      m("button.bg-red" + button, { onclick: () => actions.remove(id, subId) }, "Remove")
    )
}

exports.RandomGifList = {
  view: ({ attrs: { model, id, actions }}) =>
    m("div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", model[id].hasGifs ? "Yes" : "No"),
      m("button.bg-green"  + button, { onclick: () => actions.add(id) }, "Add"),
      m("button.bg-red" + button, { onclick: () => model[id].randomGifIds.forEach(actions.reset) },
        "Reset All"),
      m("div", model[id].randomGifIds.map(subId => m(RandomGifItem, { model, id, subId, actions })))
    )
}
