const R = require("ramda")
const uuid = require("uuid")

const nestUpdate = (update, path) => func =>
  update(R.over(R.lensPath(path), func))

const createId = () => uuid.v1()

module.exports = { nestUpdate, createId }
