const O = require("patchinko/constant")
const R = require("ramda")

const { createActions } = require("./actions")
const { createView } = require("./view")

module.exports = {
  model: id => R.objOf(id, {
    randomGifIds: []
  }),
  createActions,
  createView,
  state: model => ({
    randomGifList: O({
      hasGifs: R.any(
        R.equals("Y"),
        R.map(R.path(["image", "value", "value", "case"]),
          R.map(id => R.prop(id, model), model.randomGifList.randomGifIds)
        )
      )
    })
  })
}
