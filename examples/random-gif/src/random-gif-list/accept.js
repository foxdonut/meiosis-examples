import * as R from "ramda"

export const accept = id => state => ({
  [id]: {
    hasGifs: R.any(
      R.equals("Y"),
      R.map(
        R.path(["image", "value", "value", "case"]),
        R.map(subId => R.prop(subId, state), state[id].randomGifIds)
      )
    )
  }
})
