import { nest } from "../util/nest"
/*
import { service } from "./service"
import { button } from "../button"
import { counter } from "../counter"
*/
import { randomGif } from "../random-gif"
import { randomGifPair } from "../random-gif-pair"
/*
import { randomGifPairPair } from "../random-gif-pair-pair"
import { randomGifList } from "../random-gif-list"
*/

export const app = {
  // Note: using the same initial state multiple times only works with immutability.
  initial: {
    /*
    button: button.initial,
    counter: counter.Initial({ label: "Counter:" }),
    */
    randomGif1: randomGif.initial,
    randomGif2: randomGif.initial,
    randomGifPair: randomGifPair.initial
    /*
    randomGifPairPair: randomGifPairPair.initial,
    randomGifList: randomGifList.initial
    */
  } /* ,

  Actions: update =>
    Object.assign(
      {},
      button.Actions(update),
      randomGif.Actions(update),
      randomGifList.Actions(update)
    ),

  services: [service, counter.service, randomGifList.service(nest("randomGifList"))]
  */,
  Actions: update => {
    const actions = {
      newGifGenerated: () => {
        // would use update here
        console.log("new gif generated")
      }
    }

    const RandomGifActions = randomGif.Actions(actions)

    return {
      randomGif1: RandomGifActions(nest(update, "randomGif1")),
      randomGif2: RandomGifActions(nest(update, "randomGif2")),
      randomGifPair: randomGifPair.Actions(nest(update, "randomGifPair"), RandomGifActions)
    }
  },
  services: []
}

export { App } from "./view"
