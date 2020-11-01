import m from "mithril"

import { nest } from "../util/nest"
import { service } from "./service"
import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

export const app = {
  // Note: using the same initial state multiple times only works with immutability.
  initial: {
    events: {},
    triggers: {},
    button: button.initial,
    counter: counter.Initial({ label: "Counter:" }),
    randomGif1: randomGif.initial,
    randomGif2: randomGif.initial,
    randomGifPair: randomGifPair.initial,
    randomGifPairPair: randomGifPairPair.initial,
    randomGifList: randomGifList.initial
  },
  Actions: update =>
    Object.assign(
      {},
      button.Actions(update),
      randomGif.Actions(update),
      randomGifList.Actions(update)
    ),

  services: [service, counter.service, randomGifList.service(nest("randomGifList"))]
}

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div",
      m(Counter, { state, local: nest("counter"), actions }),

      m("div.mt2", "Button:"),
      m(Button, { state, local: nest("button"), actions }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { state, local: nest("randomGif1"), actions }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { state, local: nest("randomGif2"), actions }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { state, local: nest("randomGifPair"), actions }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { state, local: nest("randomGifPairPair"), actions }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { state, local: nest("randomGifList"), actions })
    )
}
