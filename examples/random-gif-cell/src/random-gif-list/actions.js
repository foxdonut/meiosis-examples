import * as R from "ramda"
import { v1 as uuid } from "uuid"

import { randomGif } from "../random-gif"

export const Actions = context => ({
  add: () => {
    const subId = uuid()
    const randomGifState = randomGif.initial

    context.update({ randomGifIds: R.append(subId), [subId]: randomGifState })
  },

  remove: subId => {
    context.update({
      randomGifIds: list => R.remove(list.indexOf(subId), 1, list),
      [subId]: undefined
    })
  }
})
