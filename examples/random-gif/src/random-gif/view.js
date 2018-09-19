const { identity } = require("ramda")
const { fold } = require("static-sum-type")
const { Loaded, Success, Image } = require("./types")
const { button } = require("../util/ui")

const IMG_PREFIX = "/examples/random-gif/images/"

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

exports.createView = ({ actions }) => (model, id) =>
  ["div.ba.b--green.pa2.mt2",
    ["span.mr2", "Tag:"],
    ["input[type=text]", { value: model[id].tag, onkeyup: evt => actions.editTag(id, evt.target.value) }],
    ["button.bg-blue" + button, { onclick: () => actions.newGif(id, model[id].tag) },
      "Random Gif"],
    ["button.bg-red" + button, { onclick: () => actions.reset(id) }, "Reset"],
    ["div.mt2", ["img", { width: 200, height: 200, src: imgsrc(model[id].image) }] ]
  ]
