import m from "mithril"

import { RandomGif } from "../random-gif"
import { buttonStyle } from "../util/ui"
import { hasGifs } from "./services"

const RandomGifItem = {
  view: ({ attrs: { state, actions, subId } }) =>
    m(
      "div.dib.mr2",
      { key: subId },
      m(RandomGif, { state: state[subId], actions: actions[subId] }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", hasGifs(state) ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => actions.add() }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        {
          onclick: () => state.randomGifIds.map(subId => actions[subId].reset())
        },
        "Reset All"
      ),
      m(
        "div",
        state.randomGifIds.map(subId => m(RandomGifItem, { state, actions, subId }))
      )
    )
}
