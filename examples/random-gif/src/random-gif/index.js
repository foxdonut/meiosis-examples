const m = require("mithril")
const { identity } = require("ramda")
const { fold } = require("static-sum-type")
const { Loaded, Success, Image } = require("./types")
const { actions } = require("./actions")
const { button } = require("../util/ui")

const IMG_PREFIX = "/examples/random-gif/images/"

exports.randomGif = {
  model: () => ({
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  actions
}

const imgsrc = image =>
  fold(Loaded)({
    N: () => IMG_PREFIX + "loading.gif",
    Y: fold(Success)({
      N: () => IMG_PREFIX + "error.png",
      Y: fold(Image)({
        N: () => IMG_PREFIX + "blank.png",
        Y: identity
      })
    })
  })(image)

exports.RandomGif = {
  view: ({ attrs: { model, id, actions } }) =>
    m("div.ba.b--green.pa2.mt2",
      m("span.mr2", "Tag:"),
      m("input[type=text]", { value: model[id].tag, onkeyup: evt => actions.editTag(id, evt.target.value) }),
      m("button.bg-blue" + button, { onclick: () => actions.newGif(id, model) },
        "Random Gif"),
      m("button.bg-red" + button, { onclick: () => actions.reset(id) }, "Reset"),
      m("div.mt2", m("img", { width: 200, height: 200, src: imgsrc(model[id].image) }))
    )
}
