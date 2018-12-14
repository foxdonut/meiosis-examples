import { PS, S, D } from "patchinko/explicit"
import * as R from "ramda"
import uuid from "uuid"

import { randomGif } from "../random-gif"

export const actions = ({ update }) => ({
  add: id => {
    const newId = "randomGifList:" + uuid.v1()
    const randomGifState = randomGif.initialState()

    update({
      [newId]: randomGifState,
      [id]: PS({ randomGifIds: S(R.append(newId)) })
    })
  },

  remove: (id, subId) => update({
    [id]: PS({
      randomGifIds: S(list => R.remove(list.indexOf(subId), 1, list))
    }),
    [subId]: D
  })
})
