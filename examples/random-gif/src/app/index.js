import m from "mithril"

import { service } from "./service"
import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

export const app = {
  Initial: () =>
    Object.assign(
      {
        button: button.Initial(),
        counter: counter.Initial({ label: "Counter:" }),
        randomGif1: randomGif.Initial(),
        randomGif2: randomGif.Initial(),
        randomGifList: randomGifList.Initial(),
        event: {}
      },
      randomGifPair.Initial("randomGifPair"),
      randomGifPairPair.Initial("randomGifPairPair")
    ),

  Actions: update =>
    Object.assign(
      {},
      button.Actions(update),
      randomGif.Actions(update),
      randomGifList.Actions(update)
    ),

  accept: [randomGifList.accept("randomGifList")],

  services: [service]
}

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div",
      m(Counter, { state, id: "counter", actions }),

      m("div.mt2", "Button:"),
      m(Button, { state, id: "button", actions }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { state, id: "randomGif1", actions }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { state, id: "randomGif2", actions }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { state, id: "randomGifPair", actions }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { state, id: "randomGifPairPair", actions }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { state, id: "randomGifList", actions })
    )
}
