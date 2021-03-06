import m from "mithril"
import { identity } from "ramda"
import { fold } from "static-sum-type"

import { Loaded, Success, Image } from "./types"
import { buttonStyle } from "../util/ui"

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

export const RandomGif = {
  view: ({ attrs: { context } }) => {
    const state = context.getState()

    return m(
      "div.ba.b--green.pa2.mt2",
      m("span.mr2", "Tag:"),
      m("input[type=text]", {
        value: state.tag,
        onkeyup: evt => context.actions.editTag(evt.target.value)
      }),
      m(
        "button.bg-blue" + buttonStyle,
        { onclick: () => context.actions.newGif(context) },
        "Random Gif"
      ),
      m("button.bg-red" + buttonStyle, { onclick: () => context.actions.reset() }, "Reset"),
      m("div.mt2", m("img", { width: 200, height: 200, src: imgsrc(state.image) }))
    )
  }
}
