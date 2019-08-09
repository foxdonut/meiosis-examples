import * as R from "ramda"

export const accept = state => ({
  randomGifList: {
    hasGifs: R.any(
      R.equals("Y"),
      R.map(
        R.path(["image", "value", "value", "case"]),
        R.map(id => R.prop(id, state.randomGifList), state.randomGifList.randomGifIds)
      )
    )
  }
})
