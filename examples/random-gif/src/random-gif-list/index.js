const { createActions } = require("./actions")
const { createView } = require("./view")

module.exports = {
  model: id => ({ [id]: {
    randomGifIds: []
  } }),
  createActions,
  createView
}
