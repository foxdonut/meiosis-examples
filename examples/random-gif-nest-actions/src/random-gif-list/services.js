import * as R from "ramda"

export const hasGifs = state =>
  R.any(
    R.equals("Y"),
    R.map(
      R.path(["image", "value", "value", "case"]),
      R.map(randomGifId => R.prop(randomGifId, state), state.randomGifIds)
    )
  )
