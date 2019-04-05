import O from "patchinko/constant"
import * as R from "ramda"
import uuid from "uuid"

import { randomGif } from "../random-gif"

export const actions = {
  add: () => {
    const newId = "randomGifList:" + uuid.v1()
    const randomGifState = randomGif.initialState()

    return O({
      [newId]: randomGifState,
      randomGifIds: O(R.append(newId))
    })
  },

  remove: id =>
    O({
      randomGifIds: O(list => R.remove(list.indexOf(id), 1, list)),
      [id]: null
    })
}
