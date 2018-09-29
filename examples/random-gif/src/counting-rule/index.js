const O = require("patchinko/constant")

module.exports = {
  actions: update => ({
    newGifGenerated: model => {
      const increment = model.counter.value > 3 && model.button.active ? 2 : 1
      update({ counter: O({ value: O(x => x + increment) }) })
    }
  })
}
