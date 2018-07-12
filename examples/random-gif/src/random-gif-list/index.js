const R = require("ramda")
const { createActions } = require("./actions")
const { createView } = require("./view")

const state = model => R.assoc("hasGifs", R.any(
  R.equals("Y"),
  R.map(R.path(["image", "value", "value", "case"]), R.values(model.randomGifsById))
), model)

exports.createRandomGifList = update => {
  const idUpdate = (func, id) =>
    update(R.over(R.lensPath(["randomGifsById", id]), func))

  const actions = createActions(update, idUpdate)

  return {
    model: () => ({
      randomGifsById: {},
      randomGifIds: []
    }),
    state,
    view: createView(actions, idUpdate)
  }
}
