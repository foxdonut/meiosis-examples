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

export const createCells = rootCell => ({
  root: rootCell,
  counter: nest(rootCell, "counter"),
  button: nest(rootCell, "button", button.Actions),
  randomGif1: nest(rootCell, "randomGif1", randomGif.Actions),
  randomGif2: nest(rootCell, "randomGif2", randomGif.Actions),
  randomGifPair: nest(rootCell, "randomGifPair"),
  randomGifPairPair: nest(rootCell, "randomGifPairPair"),
  randomGifList: nest(rootCell, "randomGifList", randomGifList.Actions)
})

export { App } from "./view"
