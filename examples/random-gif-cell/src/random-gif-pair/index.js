// @ts-check
import { nest } from "meiosis-setup/mergerino"
import m from "mithril"

import { randomGif, RandomGif } from "../random-gif"

const initial = {
  first: randomGif.initial,
  second: randomGif.initial
}

const createCells = cell => ({
  first: nest(cell, "first"),
  second: nest(cell, "second")
})

export const randomGifPair = {
  initial,
  createCells
}

export const RandomGifPair = {
  view: ({ attrs: { cells, newGifGenerated } }) =>
    m(
      "div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { cell: cells.first, newGifGenerated })),
      m("div.dib.ml2", m(RandomGif, { cell: cells.second, newGifGenerated }))
    )
}
