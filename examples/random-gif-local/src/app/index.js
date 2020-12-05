import { nest } from "../util/nest"
/*
import { service } from "./service"
*/
import { button } from "../button"
import { counter } from "../counter"
import { randomGif } from "../random-gif"
import { randomGifPair } from "../random-gif-pair"
import { randomGifPairPair } from "../random-gif-pair-pair"
/*
import { randomGifList } from "../random-gif-list"
*/

export const app = {
  // Note: using the same initial state multiple times only works with immutability.
  initial: {
    button: button.initial,
    counter: counter.Initial({ label: "Counter:" }),
    randomGif1: randomGif.initial,
    randomGif2: randomGif.initial,
    randomGifPair: randomGifPair.initial,
    randomGifPairPair: randomGifPairPair.initial
    /*
    randomGifList: randomGifList.initial
    */
  } /* ,
  services: [service, counter.service, randomGifList.service(nest("randomGifList"))]
  */,
  Actions: (update, getState) => {
    const actions = {
      newGifGenerated: () => {
        const state = getState()
        const increment = state.counter.value > 3 && state.button.active ? 2 : 1
        update({ counter: { value: x => x + increment } })
      }
    }

    const RandomGifActions = randomGif.Actions(actions)
    const RandomGifPairActions = randomGifPair.Actions(RandomGifActions)
    const RandomGifPairPairActions = randomGifPairPair.Actions(RandomGifPairActions)

    return {
      button: button.Actions(nest(update, "button")),
      randomGif1: RandomGifActions(nest(update, "randomGif1")),
      randomGif2: RandomGifActions(nest(update, "randomGif2")),
      randomGifPair: RandomGifPairActions(nest(update, "randomGifPair")),
      randomGifPairPair: RandomGifPairPairActions(nest(update, "randomGifPairPair"))
    }
  },
  services: []
}

export { App } from "./view"
