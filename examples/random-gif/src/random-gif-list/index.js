import m from "mithril"
import { PS } from "patchinko/explicit"
import * as R from "ramda"

import { buttonStyle } from "../util/ui"
import { actions } from "./actions"

import { RandomGif } from "../random-gif"

export const randomGifList = {
  initialState: () => ({
    randomGifIds: []
  }),
  actions,
  service: state => ({
    randomGifList: PS({
      hasGifs: R.any(
        R.equals("Y"),
        R.map(R.path(["image", "value", "value", "case"]),
          R.map(id => R.prop(id, state), state.randomGifList.randomGifIds)
        )
      )
    })
  })
}

const RandomGifItem = {
  view: ({ attrs: { state, id, subId, actions } }) =>
    m("div.dib.mr2", { key: id },
      m(RandomGif, { state, id: subId, actions }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(id, subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { state, id, actions }}) =>
    m("div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", state[id].hasGifs ? "Yes" : "No"),
      m("button.bg-green"  + buttonStyle, { onclick: () => actions.add(id) }, "Add"),
      m("button.bg-red" + buttonStyle, { onclick: () => state[id].randomGifIds.forEach(actions.reset) },
        "Reset All"),
      m("div", state[id].randomGifIds.map(subId => m(RandomGifItem, { state, id, subId, actions })))
    )
}
