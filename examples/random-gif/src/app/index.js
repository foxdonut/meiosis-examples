const Root = require("../root")
const { wirem } = require("../util/wirem")

exports.createApp = update =>
  wirem({
    component: Root,
    update
  })
