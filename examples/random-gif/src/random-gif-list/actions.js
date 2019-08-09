import * as R from "ramda"
import uuid from "uuid"

import { randomGif } from "../random-gif"

export const Actions = update => ({
  add: context => {
    const newId = uuid.v1()
    const randomGifState = randomGif.Initial()

    update(context.lens({ [newId]: randomGifState, randomGifIds: R.append(newId) }))
  },

  remove: (context, id) => {
    update(
      context.lens({
        randomGifIds: list => R.remove(list.indexOf(id), 1, list),
        [id]: undefined
      })
    )
  },

  resetAll: context => {
    const ids = context.state.randomGifIds

    update(
      context.lens(
        ids.reduce((result, id) => Object.assign(result, { [id]: randomGif.reset() }), {})
      )
    )
  }
})
