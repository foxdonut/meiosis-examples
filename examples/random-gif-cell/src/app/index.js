// @ts-check
import { nest } from "meiosis-setup/mergerino"

import { Actions } from "./actions"
import { button } from "../button"
import { counter } from "../counter"
import { randomGif } from "../random-gif"
import { randomGifPair } from "../random-gif-pair"
import { randomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList } from "../random-gif-list"

export const app = {
  // Note: using the same initial state multiple times only works with immutability.
  initial: {
    button: button.initial,
    counter: counter.Initial({ label: "Counter:" }),
    randomGif1: randomGif.initial,
    randomGif2: randomGif.initial,
    randomGifPair: randomGifPair.initial,
    randomGifPairPair: randomGifPairPair.initial,
    randomGifList: randomGifList.initial
  },
  Actions
}

export const createCells = cell => ({
  root: cell,
  counter: nest(cell, "counter"),
  button: nest(cell, "button", button.Actions),
  randomGif1: nest(cell, "randomGif1", randomGif.Actions),
  randomGif2: nest(cell, "randomGif2", randomGif.Actions),
  randomGifPair: nest(cell, "randomGifPair"),
  randomGifPairPair: nest(cell, "randomGifPairPair"),
  randomGifList: nest(cell, "randomGifList", randomGifList.Actions)
})

export { App } from "./view"
