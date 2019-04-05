import O from "patchinko/constant"
import * as R from "ramda"
import uuid from "uuid"

import { randomGif } from "../random-gif"
import { patchProp } from "../util"

export const actions = {
  add: () => {
    const newId = uuid.v1()
    const randomGifState = randomGif.initialState()

    return {
      [newId]: randomGifState,
      randomGifIds: O(R.append(newId))
    }
  },

  remove: id => ({
    randomGifIds: O(list => R.remove(list.indexOf(id), 1, list)),
    [id]: O
  }),

  resetAll: ids =>
    ids.reduce((result, id) => Object.assign(result, patchProp(randomGif.actions.reset(), id)), {})
}
