// @ts-check
import m from "mithril"

import { Button } from "../button"
import { Counter } from "../counter"
import { RandomGif } from "../random-gif"
import { RandomGifPair } from "../random-gif-pair"
import { RandomGifPairPair } from "../random-gif-pair-pair"
import { RandomGifList } from "../random-gif-list"

export const App = {
  view: ({ attrs: { cells } }) =>
    m(
      "div",
      m(Counter, { cell: cells.counter }),

      m("div.mt2", "Button:"),
      m(Button, { cell: cells.button }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { cell: cells.randomGif1 }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { cell: cells.randomGif2 }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { cells: cells.randomGifPair }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { cells: cells.randomGifPairPair }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { cell: cells.randomGifList })
    )
}
