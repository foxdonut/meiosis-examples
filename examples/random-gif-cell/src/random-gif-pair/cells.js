import { nest } from "meiosis-setup/mergerino"

import { randomGif } from "../random-gif"

export const createCells = cell => ({
  first: randomGif.createCell(nest(cell, "first")),
  second: randomGif.createCell(nest(cell, "second"))
})
