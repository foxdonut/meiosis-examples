// @ts-check
import m from "mithril"

import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

const actions = {
  newGifGenerated: cell => {
    const increment = cell.state.counter.value > 3 && cell.state.button.active ? 2 : 1
    cell.update({ counter: { value: x => x + increment } })
  }
}

export const app = {
  // Note: using the same initial state multiple times only works with immutability.
  initial: {
    button: button.initial,
    counter: counter.Initial({ label: "Counter:" }),
    randomGif1: randomGif.initial,
    randomGif2: randomGif.initial,
    randomGifPair: randomGifPair.initial,
    randomGifPairPair: randomGifPairPair.initial,
    randomGifList: randomGifList.initial
  }
}

export const App = {
  view: ({ attrs: { cell } }) => {
    const newGifGenerated = () => actions.newGifGenerated(cell)

    return m(
      "div",
      m(Counter, { cell: cell.nest("counter") }),

      m("div.mt2", "Button:"),
      m(Button, { cell: cell.nest("button") }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { cell: cell.nest("randomGif1"), newGifGenerated }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { cell: cell.nest("randomGif2"), newGifGenerated }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { cell: cell.nest("randomGifPair"), newGifGenerated }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { cell: cell.nest("randomGifPairPair"), newGifGenerated }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { cell: cell.nest("randomGifList") })
    )
  }
}
