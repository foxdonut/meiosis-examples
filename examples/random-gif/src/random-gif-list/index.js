const R = require("ramda")
const { createActions } = require("./actions")
const { createView } = require("./view")

const state = model => R.assoc("hasGifs", R.any(
  R.equals("Y"),
  R.map(R.path(["image", "value", "value", "case"]), R.values(model.randomGifsById))
), model)

exports.createRandomGifList = update => {
  const actions = createActions(update)

  return {
    model: () => ({
      randomGifsById: {},
      randomGifIds: []
    }),
    state,
    view: createView(actions, update)
  }
}
