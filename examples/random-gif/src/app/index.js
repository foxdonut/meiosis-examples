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

  actions: update =>
    Object.assign(
      {},
      button.actions(update),
      randomGif.actions(update),
      randomGifList.actions(update)
    ),

  computed: [
    randomGifList.computed
    // could have more functions here
  ]
}

export const App = {
  view: ({ attrs: { context, actions } }) =>
    m(
      "div",
      m(Counter, { context: lensProp(context, "counter"), actions }),

      m("div.mt2", "Button:"),
      m(Button, { context: lensProp(context, "button"), actions }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { context: lensProp(context, "randomGif1"), actions }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { context: lensProp(context, "randomGif2"), actions }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { context: lensProp(context, "randomGifPair"), actions }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { context: lensProp(context, "randomGifPairPair"), actions }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { context: lensProp(context, "randomGifList"), actions })
    )
}
