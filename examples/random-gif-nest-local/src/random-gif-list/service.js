import * as R from "ramda"

export const service = local => state => {
  const localState = local.get(state)

  return local.patch({
    hasGifs: R.any(
      R.equals("Y"),
      R.map(
        R.path(["image", "value", "value", "case"]),
        R.map(subId => R.prop(subId, localState), localState.randomGifIds)
      )
    )
  })
}
