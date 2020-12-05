import * as R from "ramda"
import { v1 as uuid } from "uuid"

import { randomGif } from "../random-gif"
import { nest } from "../util/nest"

export const Actions = RandomGifActions => update => ({
  add: function () {
    const subId = uuid()
    const randomGifState = randomGif.initial

    this[subId] = RandomGifActions(nest(update, subId))

    update({ randomGifIds: R.append(subId), [subId]: randomGifState })
  },

  remove: function (subId) {
    delete this[subId]

    update({
      randomGifIds: list => R.remove(list.indexOf(subId), 1, list),
      [subId]: undefined
    })
  }
})
