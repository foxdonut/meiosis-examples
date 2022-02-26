import m from "mithril"
import * as R from "ramda"
import { v1 as uuid } from "uuid"
import { nest } from "meiosis-setup/mergerino"

import { randomGif, RandomGif } from "../random-gif"
import { buttonStyle } from "../util/ui"

const hasGifs = state =>
  R.any(
    R.equals("Y"),
    R.map(
      R.path(["image", "value", "value", "case"]),
      R.map(randomGifId => R.prop(randomGifId, state), state.randomGifIds)
    )
  )

const initial = {
  randomGifIds: []
}

const randomGifCells = {}

const actions = {
  add: cell => {
    const subId = uuid()
    const randomGifState = randomGif.initial
    randomGifCells[subId] = nest(cell, subId)

    cell.update({ randomGifIds: R.append(subId), [subId]: randomGifState })
  },

  remove: (cell, subId) => {
    // commented out so that Meiosis Tracer works when going back to previous states
    // delete randomGifCells[subId]
    cell.update({
      randomGifIds: list => R.remove(list.indexOf(subId), 1, list),
      [subId]: undefined
    })
  }
}

export const randomGifList = {
  initial
}

const RandomGifItem = {
  view: ({ attrs: { cell, subId } }) =>
    m(
      "div.dib.mr2",
      { key: subId },
      m(RandomGif, { cell: randomGifCells[subId] }),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.remove(cell, subId) }, "Remove")
    )
}

export const RandomGifList = {
  view: ({ attrs: { cell } }) => {
    const state = cell.getState()

    return m(
      "div.ba.b--blue.pa2.mt2",
      m("div", "Has gifs: ", hasGifs(state) ? "Yes" : "No"),
      m("button.bg-green" + buttonStyle, { onclick: () => actions.add(cell) }, "Add"),
      m(
        "button.bg-red" + buttonStyle,
        {
          onclick: () =>
            state.randomGifIds.map(subId => randomGif.actions.reset(randomGifCells[subId]))
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
