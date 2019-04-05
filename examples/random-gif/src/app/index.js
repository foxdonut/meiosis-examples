import m from "mithril"

import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

import { lensProp } from "../util"

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
      m(Counter, { root, local: lensProp(root, "counter") }),

      m("div.mt2", "Button:"),
      m(Button, { root, local: lensProp(root, "button") }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { root, local: lensProp(root, "randomGif1") }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { root, local: lensProp(root, "randomGif2") }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { root, local: lensProp(root, "randomGifPair") }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { root, local: lensProp(root, "randomGifPairPair") }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { root, local: lensProp(root, "randomGifList") })
    )
}
