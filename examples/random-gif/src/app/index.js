import m from "mithril"
import { P, PS, S } from "patchinko/explicit"

import { button, Button } from "../button"
import { counter, Counter } from "../counter"
import { randomGif, RandomGif } from "../random-gif"
import { randomGifPair, RandomGifPair } from "../random-gif-pair"
import { randomGifPairPair, RandomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList, RandomGifList } from "../random-gif-list"

const newGifGenerated = model => {
  const increment = model.counter.value > 3 && model.button.active ? 2 : 1
  return { counter: PS({ value: S(x => x + increment) }) }
}

export const app = {
  model: () => Object.assign(
    {
      button: button.model(),
      counter: counter.model({ label: "Counter:" }),
      randomGif1: randomGif.model(),
      randomGif2: randomGif.model(),
      randomGifList: randomGifList.model()
    },
    randomGifPair.model("randomGifPair"),
    randomGifPairPair.model("randomGifPairPair")
  ),
  actions: update => Object.assign({},
    button.actions(update),
    randomGif.actions(update, newGifGenerated),
    randomGifList.actions(update)
  ),
  state: model => [
    randomGifList.state
    // could have more functions here
  ].reduce((x, f) => P(x, f(x)), model)
}

export const App = {
  view: ({ attrs: { model, actions } }) =>
    m("div",
      m(Counter, { model, id: "counter", actions }),

      m("div.mt2", "Button:"),
      m(Button, { model, id: "button", actions }),

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { model, id: "randomGif1", actions }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { model, id: "randomGif2", actions }),

      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { model, id: "randomGifPair", actions }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { model, id: "randomGifPairPair", actions }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { model, id: "randomGifList", actions })
    )
}
