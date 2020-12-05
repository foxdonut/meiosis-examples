import m from "mithril"

import { Button } from "../button"
import { Counter } from "../counter"
import { RandomGif } from "../random-gif"
import { RandomGifPair } from "../random-gif-pair"
import { RandomGifPairPair } from "../random-gif-pair-pair"
/*
import { RandomGifList } from "../random-gif-list"
*/

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div",

      m(Counter, { state: state.counter }),

      m("div.mt2", "Button:"),
      m(Button, { state: state.button, actions: actions.button }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { state: state.randomGif1, actions: actions.randomGif1 }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { state: state.randomGif2, actions: actions.randomGif2 }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { state: state.randomGifPair, actions: actions.randomGifPair }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { state: state.randomGifPairPair, actions: actions.randomGifPairPair })

      /*
      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { state, local: nest("randomGifList"), actions })
      */
    )
}
