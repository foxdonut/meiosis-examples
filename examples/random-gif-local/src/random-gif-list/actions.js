import * as R from "ramda"
import { v1 as uuid } from "uuid"

import { randomGif } from "../random-gif"
import { nest } from "../util/nest"

export const Actions = RandomGifActions => update => ({
  add: function () {
    const randomGifId = uuid()
    const randomGifState = randomGif.initial

    this[randomGifId] = RandomGifActions(nest(update, randomGifId))

    update({ randomGifIds: R.append(randomGifId), [randomGifId]: randomGifState })
  },

  remove: function (randomGifId) {
    delete this[randomGifId]

    update({
      randomGifIds: list => R.remove(list.indexOf(randomGifId), 1, list),
      [randomGifId]: undefined
    })
  }
})
