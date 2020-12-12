import m from "mithril"

import { RandomGif } from "../random-gif"
import { buttonStyle } from "../util/ui"
import { hasGifs } from "./util"

const RandomGifItem = {
  view: ({ attrs: { state, id, actions, subId } }) =>
    m(
      "div.dib.mr2",
      { key: subId },
      m(RandomGif, { state, id: subId, actions }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(id, subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { state, id, actions } }) =>
    m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", hasGifs(state[id]) ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => actions.add(id) }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        { onclick: () => state[id].randomGifIds.map(subId => actions.reset(subId)) },
        "Reset All"
      ),
      m(
        "div",
        state[id].randomGifIds.map(subId => m(RandomGifItem, { state, id, actions, subId }))
      )
    )
}
