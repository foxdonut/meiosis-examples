const uuid = require("uuid")
const { Loaded, Success, Image } = require("./types")
const { actions } = require("./actions")
const { view } = require("./view")
const { signals } = require("./signals")

module.exports = {
  model: () => ({
    id: uuid.v1(),
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  view,
  actions,
  signals
}
