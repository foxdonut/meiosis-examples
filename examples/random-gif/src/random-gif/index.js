const { Loaded, Success, Image } = require("./types")
const { actions } = require("./actions")
const { view } = require("./view")

module.exports = {
  model: () => ({
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  actions,
  view
}
