const m = require("mithril");
const b = require("bss").default;
const { identity } = require("ramda");
const { fold } = require("static-sum-type");
const { Loaded, Success, Image } = require("./types");

const imgsrc = image =>
  fold(Loaded)({
    N: () => "/examples/random-gif-2/images/loading.gif",
    Y: fold(Success)({
      N: () => "/examples/random-gif-2/images/error.png",
      Y: fold(Image)({
        N: () => "/examples/random-gif-2/images/blank.png",
        Y: identity
      })
    })
  })(image);

exports.createView = actions => model =>
  m("div" + b.border("1px solid green").p(8).mt(4), [
    m("span" + b.mr(4), "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: actions.editTag }),
    m("button" + b.d("block").mt(4).p(8).w("8rem").br(".25rem").c("white").bc("#357edd"),
      { onclick: actions.newGif(model.id, model.tag) },
      "Random Gif"),
    m("div" + b.mt(4), [ m("img", { width: 200, height: 200, src: imgsrc(model.image) }) ])
  ]);
