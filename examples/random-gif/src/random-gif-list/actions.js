import O from "patchinko/constant"
import * as R from "ramda"
import uuid from "uuid"

import { randomGif } from "../random-gif"
import { patchProp } from "../util"

export const actions = update => ({
  add: context => {
    const newId = uuid.v1()
    const randomGifState = randomGif.initialState()

    update(context.lens({ [newId]: randomGifState, randomGifIds: O(R.append(newId)) }))
  },

  remove: (context, id) => {
    update(
      context.lens({
        randomGifIds: O(list => R.remove(list.indexOf(id), 1, list)),
        [id]: O
      })
    )
  },

  resetAll: context => {
    const ids = context.state.randomGifIds

    update(
      context.lens(
        ids.reduce(
          (result, id) => Object.assign(result, patchProp(randomGif.actions.reset(), id)),
          {}
        )
      )
    )
  }
})
