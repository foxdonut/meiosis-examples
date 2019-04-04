import m from "mithril"
import { P, PS, S } from "patchinko/explicit"

import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

const newGifGenerated = state => {
  const increment = state.counter.value > 3 && state.button.active ? 2 : 1
  return { counter: PS({ value: S(x => x + increment) }) }
}

export const app = {
  initialState: () =>
    Object.assign(
      {
        button: button.initialState(),
        counter: counter.initialState({ label: "Counter:" }),
        randomGif1: randomGif.initialState(),
        randomGif2: randomGif.initialState(),
        randomGifList: randomGifList.initialState()
      },
      randomGifPair.initialState("randomGifPair"),
      randomGifPairPair.initialState("randomGifPairPair")
    ),
  actions: ({ update }) =>
    Object.assign(
      {},
      button.actions({ update }),
      randomGif.actions({ update, newGifGenerated }),
      randomGifList.actions({ update })
    ),
  service: state =>
    [
      randomGifList.service
      // could have more functions here
    ].reduce((x, f) => P(x, f(x)), state)
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
