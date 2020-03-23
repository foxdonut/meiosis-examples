import * as R from "ramda"
import { v1 as uuid } from "uuid"

import { randomGif } from "../random-gif"

export const Actions = update => ({
  add: id => {
    const subId = id + ":" + uuid()
    const randomGifState = randomGif.initial

    update({ [id]: { randomGifIds: R.append(subId) }, [subId]: randomGifState })
  },

  remove: (id, subId) => {
    update({
      [id]: {
        randomGifIds: list => R.remove(list.indexOf(subId), 1, list)
      },
      [subId]: undefined
    })
  }
})
