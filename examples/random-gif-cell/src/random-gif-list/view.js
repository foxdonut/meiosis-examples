// @ts-check
import m from "mithril"
import { nest } from "meiosis-setup/mergerino"

import { RandomGif } from "../random-gif"
import { buttonStyle } from "../util/ui"
import { hasGifs } from "./util"

const RandomGifItem = {
  view: ({ attrs: { cell, subId } }) =>
    m(
      "div.dib.mr2",
      { key: subId },
      m(RandomGif, { cell: nest(cell, subId) }),
      m("button.bg-red" + buttonStyle, { onclick: () => cell.actions.remove(subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { cell } }) => {
    const state = cell.getState()

    return m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", hasGifs(state) ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => cell.actions.add() }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        {
          onclick: () => state.randomGifIds.map(subId => cell.nest(subId).actions.reset())
        },
        "Reset All"
      ),
      m(
        "div",
        state.randomGifIds.map(subId => m(RandomGifItem, { cell, subId }))
      )
    )
  }
}
