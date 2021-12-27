import { nest } from "meiosis-setup/mergerino"

import { randomGif } from "../random-gif"

export const createCells = cell => ({
  first: nest(cell, "first", randomGif.Actions),
  second: nest(cell, "second", randomGif.Actions)
})
