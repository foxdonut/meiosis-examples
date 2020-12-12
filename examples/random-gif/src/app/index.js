import { button } from "../button"
import { counter } from "../counter"
import { randomGif } from "../random-gif"
import { randomGifPair } from "../random-gif-pair"
import { randomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList } from "../random-gif-list"

export const app = {
  // Note: using the same initial state multiple times only works with immutability.
  initial: Object.assign(
    {
      button: button.initial,
      counter: counter.Initial({ label: "Counter:" }),
      randomGif1: randomGif.initial,
      randomGif2: randomGif.initial,
      randomGifList: randomGifList.initial
    },
    randomGifPair.Initial("randomGifPair"),
    randomGifPairPair.Initial("randomGifPairPair")
  ),

  Actions: (update, getState) =>
    Object.assign(
      {
        newGifGenerated: () => {
          const state = getState()
          const increment = state.counter.value > 3 && state.button.active ? 2 : 1
          update({ counter: { value: x => x + increment } })
        }
      },
      button.Actions(update),
      randomGif.Actions(update),
      randomGifList.Actions(update)
    )
}

export { App } from "./view"
