// @ts-check
import { nest } from "meiosis-setup/mergerino"
import m from "mithril"

import { randomGifPair, RandomGifPair } from "../random-gif-pair"

const initial = {
  one: randomGifPair.initial,
  two: randomGifPair.initial
}

const createCells = cell => ({
  one: randomGifPair.createCells(nest(cell, "one")),
  two: randomGifPair.createCells(nest(cell, "two"))
})

export const randomGifPairPair = {
  initial,
  createCells
}

export const RandomGifPairPair = {
  view: ({ attrs: { cells } }) =>
    m(
      "div.ba.b--orange.pa2.mt2",
      m(RandomGifPair, { cells: cells.one }),
      m(RandomGifPair, { cells: cells.two })
    )
}
