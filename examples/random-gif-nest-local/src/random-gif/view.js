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
  view: ({ attrs: { state, local, actions } }) =>
    m(
      "div.ba.b--green.pa2.mt2",
      m("span.mr2", "Tag:"),
      m("input[type=text]", {
        value: local.get(state).tag,
        onkeyup: evt => actions.editTag(local, evt.target.value)
      }),
      m(
        "button.bg-blue" + buttonStyle,
        { onclick: () => actions.newGif(local, state) },
        "Random Gif"
      ),
      m("button.bg-red" + buttonStyle, { onclick: () => actions.reset(local) }, "Reset"),
      m("div.mt2", m("img", { width: 200, height: 200, src: imgsrc(local.get(state).image) }))
    )
}
