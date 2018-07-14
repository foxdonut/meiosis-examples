const RandomGif = require("../random-gif")
const { nestUpdate } = require("../util/nest")

exports.createActions = update => ({
  add: () => update(model => {
    const randomGifModel = RandomGif.model()
    model.randomGifIds.push(randomGifModel.id)
    model.randomGifsById[randomGifModel.id] = randomGifModel
    return model
  }),

  remove: id => update(model => {
    model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1)
    delete model.randomGifsById[id]
    return model
  }),

  resetAll: ids => ids.forEach(id => RandomGif.actions.reset(nestUpdate(update, ["randomGifsById", id])))
})
