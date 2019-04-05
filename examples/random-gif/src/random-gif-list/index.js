import m from "mithril"
import O from "patchinko/constant"
import * as R from "ramda"

import { actions } from "./actions"
import { RandomGif } from "../random-gif"
import { lensProp } from "../util"
import { buttonStyle } from "../util/ui"

export const randomGifList = {
  initialState: () => ({
    randomGifIds: []
  }),

  actions,

  // FIXME
  computed: state => ({
    randomGifList: O({
      hasGifs: R.any(
        R.equals("Y"),
        R.map(
          R.path(["image", "value", "value", "case"]),
          R.map(id => R.prop(id, state.randomGifList), state.randomGifList.randomGifIds)
        )
      )
    })
  })
}

const RandomGifItem = {
  view: ({ attrs: { root, local, id } }) =>
    m(
      "div.dib.mr2",
      { key: id },
      m(RandomGif, { root, local: lensProp(local, id) }),
      m(
        "button.bg-red" + buttonStyle,
        { onclick: () => local.update(actions.remove(id)) },
        "Remove"
      )
    )
}

export const RandomGifList = {
  view: ({ attrs: { root, local } }) =>
    m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", local.state.hasGifs ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => local.update(actions.add()) }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        { onclick: () => local.update(actions.resetAll(local.state.randomGifIds)) },
        "Reset All"
      ),
      m("div", local.state.randomGifIds.map(id => m(RandomGifItem, { root, local, id })))
    )
}
