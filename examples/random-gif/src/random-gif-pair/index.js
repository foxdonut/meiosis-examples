const m = require("mithril")
const { randomGif, RandomGif } = require("../random-gif")

exports.randomGifPair = {
  model: id => ({
    [id + "First"]: randomGif.model(),
    [id + "Second"]: randomGif.model()
  })
}

exports.RandomGifPair = {
  view: ({ attrs: { model, id, actions } }) =>
    m("div.ba.b--purple.pa2.mt2",
      m("div.dib", m(RandomGif, { model, id: id + "First", actions })),
      m("div.dib.ml2", m(RandomGif, { model, id: id + "Second", actions }))
    )
}
