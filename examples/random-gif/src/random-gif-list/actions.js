const O = require("patchinko/constant")
const R = require("ramda")
const uuid = require("uuid")

const { randomGif } = require("../random-gif")

exports.actions = update => ({
  add: id => {
    const newId = "randomGifList:" + uuid.v1()
    const randomGifModel = randomGif.model()

    update({
      [newId]: randomGifModel,
      [id]: O({ randomGifIds: O(R.append(newId)) })
    })
  },

  remove: (id, subId) => update({
    [id]: O({
      randomGifIds: O(list => R.remove(list.indexOf(subId), 1, list))
    }),
    [subId]: O
  })
})
