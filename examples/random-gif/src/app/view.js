import m from "mithril"

import { Button } from "../button"
import { Counter } from "../counter"
import { RandomGif } from "../random-gif"
import { RandomGifPair } from "../random-gif-pair"
import { RandomGifPairPair } from "../random-gif-pair-pair"
import { RandomGifList } from "../random-gif-list"

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
