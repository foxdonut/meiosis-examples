import m from "mithril"

/*
import { nest } from "../util/nest"
import { Button } from "../button"
import { Counter } from "../counter"
*/
import { randomGif, RandomGif } from "../random-gif"
/*
import { RandomGifPair } from "../random-gif-pair"
import { RandomGifPairPair } from "../random-gif-pair-pair"
import { RandomGifList } from "../random-gif-list"
*/

export const App = {
  view: ({ attrs: { state, actions, nest } }) => {
    const RandomGifActions = randomGif.Actions(actions)
    const nestRandomGif1 = nest("randomGif1", RandomGifActions)
    const nestRandomGif2 = nest("randomGif2", RandomGifActions)

    return m(
      "div",
      /*
      m(Counter, { state, local: nest("counter"), actions }),

      m("div.mt2", "Button:"),
      m(Button, { state, local: nest("button"), actions }),
      */

      m("div.mt2", "Random Gif:"),
      m(RandomGif, { local: nestRandomGif1.get(state) }),

      m("div.mt2", "Another Random Gif:"),
      m(RandomGif, { local: nestRandomGif2.get(state) }) //,

      /*
      m("div.mt2", "Random Gif Pair:"),
      m(RandomGifPair, { state, local: nest("randomGifPair"), actions }),

      m("div.mt2", "Random Gif Pair Pair:"),
      m(RandomGifPairPair, { state, local: nest("randomGifPairPair"), actions }),

      m("div.mt2", "Random Gif List:"),
      m(RandomGifList, { state, local: nest("randomGifList"), actions })
      */
    )
  }
}
