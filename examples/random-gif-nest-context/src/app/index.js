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
  Actions: context =>
    Object.assign(
      Actions(context),
      button.Actions(context),
      randomGif.Actions(context),
      randomGifList.Actions(context)
    )
}

export { App } from "./view"
