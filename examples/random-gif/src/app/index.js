import m from "mithril"
import O from "patchinko/constant"

import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

import { lens } from "../util"

const newGifGenerated = state => {
  const increment = state.counter.value > 3 && state.button.active ? 2 : 1
  return { counter: O({ value: O(x => x + increment) }) }
}

export const app = {
  initialState: () => ({
    button: button.initialState(),
    counter: counter.initialState({ label: "Counter:" }),
    randomGif1: randomGif.initialState(),
    randomGif2: randomGif.initialState(),
    randomGifList: randomGifList.initialState(),
    randomGifPair: randomGifPair.initialState(),
    randomGifPairPair: randomGifPairPair.initialState()
  }),

  computed: [
    randomGifList.computed
    // could have more functions here
  ]
}

export const App = {
  view: ({ attrs: { root } }) =>
    m(
      "div",
      m(Counter, { root, local: lens(root, ["counter"]) }),

      m("div.mt2", "Button:"),
      m(Button, { root, local: lens(root, ["button"]) }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { root, local: lens(root, ["randomGif1"]) }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { root, local: lens(root, ["randomGif2"]) }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { root, local: lens(root, ["randomGifPair"]) }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { root, local: lens(root, ["randomGifPairPair"]) }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { root, local: lens(root, ["randomGifList"]) })
    )
}
