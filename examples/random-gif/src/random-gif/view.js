const b = require("bss")
const { identity } = require("ramda")
const { fold } = require("static-sum-type")
const { Loaded, Success, Image } = require("./types")
const { button } = require("../util/ui")
const { actions } = require("./actions")

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

exports.view = (model, update) =>
  ["div" + b.border("1px solid green").p(8).mt(4),
    ["span" + b.mr(4), "Tag:"],
    ["input[type=text]", { value: model.tag, onkeyup: evt => actions.editTag(update, model.id, evt.target.value) }],
    ["button" + button.bc("#357edd"), { onclick: () => actions.newGif(update, model.id, model.tag) },
      "Random Gif"],
    ["button" + button.bc("red"), { onclick: () => actions.reset(update, model.id) }, "Reset"],
    ["div" + b.mt(4), ["img", { width: 200, height: 200, src: imgsrc(model.image) }] ]
  ]
