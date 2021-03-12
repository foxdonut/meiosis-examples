import m from "mithril"

import { Button } from "../button"
import { Counter } from "../counter"
import { RandomGif } from "../random-gif"
import { RandomGifPair } from "../random-gif-pair"
import { RandomGifPairPair } from "../random-gif-pair-pair"
import { RandomGifList } from "../random-gif-list"

export const App = {
  view: ({ attrs: { context } }) =>
    m(
      "div",
      m(Counter, { context: context.nest("counter") }),

      m("div.mt2", "Button:"),
      m(Button, { context: context.nest("button") }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { context: context.nest("randomGif1") }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { context: context.nest("randomGif2") }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { context: context.nest("randomGifPair") }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { context: context.nest("randomGifPairPair") }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { context: context.nest("randomGifList") })
    )
}
