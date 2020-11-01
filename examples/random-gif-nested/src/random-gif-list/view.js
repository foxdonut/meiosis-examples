import m from "mithril"

import { RandomGif } from "../random-gif"
import { nestLocal } from "../util/nest"
import { buttonStyle } from "../util/ui"

const RandomGifItem = {
  view: ({ attrs: { state, local, actions, subId } }) =>
    m(
      "div.dib.mr2",
      { key: subId },
      m(RandomGif, { state, local: nestLocal(local, [subId]), actions }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(local, subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { state, local, actions } }) =>
    m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", local.state.hasGifs ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => actions.add(local) }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        {
          onclick: () =>
            local.state.randomGifIds.map(subId => actions.reset(nestLocal(local, [subId])))
        },
        "Reset All"
      ),
      m(
        "div",
        local.state.randomGifIds.map(subId => m(RandomGifItem, { state, local, actions, subId }))
      )
    )
}
