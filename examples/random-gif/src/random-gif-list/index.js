import m from "mithril"
import { PS } from "patchinko/explicit"
import * as R from "ramda"

import { buttonStyle } from "../util/ui"
import { actions } from "./actions"

import { RandomGif } from "../random-gif"

export const randomGifList = {
  model: () => ({
    randomGifIds: []
  }),
  actions,
  state: model => ({
    randomGifList: PS({
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
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(id, subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { model, id, actions }}) =>
    m("div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", model[id].hasGifs ? "Yes" : "No"),
      m("button.bg-green"  + buttonStyle, { onclick: () => actions.add(id) }, "Add"),
      m("button.bg-red" + buttonStyle, { onclick: () => model[id].randomGifIds.forEach(actions.reset) },
        "Reset All"),
      m("div", model[id].randomGifIds.map(subId => m(RandomGifItem, { model, id, subId, actions })))
    )
}
