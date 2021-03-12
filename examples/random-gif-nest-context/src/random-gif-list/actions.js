import * as R from "ramda"
import { v1 as uuid } from "uuid"

import { randomGif } from "../random-gif"

export const Actions = update => ({
  add: () => {
    const subId = uuid()
    const randomGifState = randomGif.initial

    update({ randomGifIds: R.append(subId), [subId]: randomGifState })
  },

  remove: subId => {
    update({
      randomGifIds: list => R.remove(list.indexOf(subId), 1, list),
      [subId]: undefined
    })
  }
})
