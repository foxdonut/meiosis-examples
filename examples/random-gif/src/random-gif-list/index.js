import m from "mithril"
import O from "patchinko/constant"
import * as R from "ramda"

import { buttonStyle } from "../util/ui"
import { actions } from "./actions"

import { RandomGif } from "../random-gif"

export const randomGifList = {
  initialState: () => ({
    randomGifIds: []
  }),

  actions,

  computed: state => ({
    randomGifList: O({
      hasGifs: R.any(
        R.equals("Y"),
        R.map(
          R.path(["image", "value", "value", "case"]),
          R.map(id => R.prop(id, state), state.randomGifList.randomGifIds)
        )
      )
    })
  })
}

const RandomGifItem = {
  view: ({ attrs: { local, id } }) =>
    m(
      "div.dib.mr2",
      { key: id },
      m(RandomGif, { local, id }),
      m(
        "button.bg-red" + buttonStyle,
        { onclick: () => local.update(actions.remove(id)) },
        "Remove"
      )
    )
}

export const RandomGifList = {
  view: ({ attrs: { local } }) =>
    m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", local.state.hasGifs ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => local.update(actions.add()) }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        { onclick: () => local.state.randomGifIds.forEach(actions.reset) },
        "Reset All"
      ),
      m("div", local.state.randomGifIds.map(id => m(RandomGifItem, { local, id })))
    )
}
