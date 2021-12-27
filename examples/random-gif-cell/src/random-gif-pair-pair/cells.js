import { nest } from "meiosis-setup/mergerino"

import { randomGifPair } from "../random-gif-pair"

export const createCells = cell => ({
  one: randomGifPair.createCells(nest(cell, "one")),
  two: randomGifPair.createCells(nest(cell, "two"))
})
