import * as R from "ramda"
import { v1 as uuid } from "uuid"

import { randomGif } from "../random-gif"

export const Actions = update => ({
  add: local => {
    const subId = uuid()
    const randomGifState = randomGif.initial

    update(local.patch({ randomGifIds: R.append(subId), [subId]: randomGifState }))
  },

  remove: (local, subId) => {
    update(
      local.patch({
        randomGifIds: list => R.remove(list.indexOf(subId), 1, list),
        [subId]: undefined
      })
    )
  }
})
