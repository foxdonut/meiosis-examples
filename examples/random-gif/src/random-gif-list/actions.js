const O = require("patchinko/constant")
const R = require("ramda")
const uuid = require("uuid")

const RandomGif = require("../random-gif")

exports.createActions = update => {
  const randomGifActions = RandomGif.createActions(update)

  return {
    add: id => {
      const newId = "randomGifList:" + uuid.v1()
      const randomGifModel = RandomGif.model(newId)
      const key = Object.keys(randomGifModel)[0]

      update({
        [key]: randomGifModel[key],
        [id]: O({ randomGifIds: O(R.concat([ newId ])) })
      })
    },

    remove: (id, subId) => update({
      [id]: O({
        randomGifIds: O(list => R.remove(list.indexOf(subId), 1, list))
      }),
      [subId]: O
    }),

    resetAll: ids => ids.forEach(randomGifActions.reset)
  }
}
