import m from "mithril"

import { RandomGif } from "../random-gif"
import { lensProp } from "../util"
import { buttonStyle } from "../util/ui"

const RandomGifItem = {
  view: ({ attrs: { context, actions, id } }) =>
    m(
      "div.dib.mr2",
      { key: id },
      m(RandomGif, { context: lensProp(context, id), actions }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(context, id) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { context, actions } }) =>
    m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", context.state.hasGifs ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => actions.add(context) }, "Add"),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.resetAll(context) }, "Reset All"),
      m("div", context.state.randomGifIds.map(id => m(RandomGifItem, { context, actions, id })))
    )
}
