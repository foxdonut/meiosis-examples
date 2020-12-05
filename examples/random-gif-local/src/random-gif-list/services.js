import * as R from "ramda"

export const hasGifs = state =>
  R.any(
    R.equals("Y"),
    R.map(
      R.path(["image", "value", "value", "case"]),
      R.map(subId => R.prop(subId, state), state.randomGifIds)
    )
  )
