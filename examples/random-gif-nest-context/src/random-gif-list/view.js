import m from "mithril"

import { RandomGif } from "../random-gif"
import { buttonStyle } from "../util/ui"
import { hasGifs } from "./util"

const RandomGifItem = {
  view: ({ attrs: { context, subId } }) =>
    m(
      "div.dib.mr2",
      { key: subId },
      m(RandomGif, { context: context.nest(subId) }),
      m("button.bg-red" + buttonStyle, { onclick: () => context.actions.remove(subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { context } }) => {
    const state = context.getState()

    return m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", hasGifs(state) ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => context.actions.add() }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        {
          onclick: () => state.randomGifIds.map(subId => context.nest(subId).actions.reset())
        },
        "Reset All"
      ),
      m(
        "div",
        state.randomGifIds.map(subId => m(RandomGifItem, { context, subId }))
      )
    )
  }
}
