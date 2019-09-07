import * as R from "ramda"
import uuid from "uuid"

import { randomGif } from "../random-gif"

export const Actions = update => ({
  add: id => {
    const subId = id + ":" + uuid.v1()
    const randomGifState = randomGif.Initial()

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
