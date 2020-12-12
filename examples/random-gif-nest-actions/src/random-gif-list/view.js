import m from "mithril"

import { RandomGif } from "../random-gif"
import { buttonStyle } from "../util/ui"
import { hasGifs } from "./util"

const RandomGifItem = {
  view: ({ attrs: { state, actions, randomGifId } }) =>
    m(
      "div.dib.mr2",
      { key: randomGifId },
      m(RandomGif, { state: state[randomGifId], actions: actions[randomGifId] }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(randomGifId) }, "Remove")
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
          onclick: () => state.randomGifIds.map(randomGifId => actions[randomGifId].reset())
        },
        "Reset All"
      ),
      m(
        "div",
        state.randomGifIds.map(randomGifId => m(RandomGifItem, { state, actions, randomGifId }))
      )
    )
}
