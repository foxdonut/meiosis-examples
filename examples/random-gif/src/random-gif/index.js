const R = require("ramda")

const { Loaded, Success, Image } = require("./types")
const { createActions } = require("./actions")
const { createView } = require("./view")

module.exports = {
  model: id => R.objOf(id, {
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  createActions,
  createView
}
