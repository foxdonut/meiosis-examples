import { identity } from "ramda"
import { fold } from "static-sum-type"
import yslashn from "static-sum-type/modules/yslashn"
import m from "mithril"
import { buttonStyle } from "../util/ui"

export const Loaded = yslashn.maybe("Loaded")
export const Success = yslashn.maybe("Success")
export const Image = yslashn.maybe("Image")

const IMG_PREFIX = "/examples/random-gif/images/"
const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "HMUbJEROIPi2Dodeq0thL28emz5CMCRX"
// const api_key = "dc6zaTOxFJmzC"

const initial = {
  image: Loaded.Y(Success.Y(Image.N())),
  tag: ""
}

const Actions = cell => ({
  editTag: tag => cell.update({ tag }),

  newGif: () => {
    cell.update({ image: Loaded.N() })

    m.request({ url: gif_new_url, params: { api_key, tag: cell.getState().tag } })
      .then(response => {
        cell.update({ image: Loaded.Y(Success.Y(Image.Y(response.data.images.original.url))) })
        cell.root.actions.newGifGenerated()
      })
      .catch(() => cell.update({ image: Loaded.Y(Success.N()) }))
  },

  reset: () => cell.update({ image: Loaded.Y(Success.Y(Image.N())) })
})

export const randomGif = {
  initial,
  Actions
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

export const RandomGif = {
  view: ({ attrs: { cell } }) => {
    const state = cell.getState()

    return m(
      "div.ba.b--green.pa2.mt2",
      m("span.mr2", "Tag:"),
      m("input[type=text]", {
        value: state.tag,
        onkeyup: evt => cell.actions.editTag(evt.target.value)
      }),
      m("button.bg-blue" + buttonStyle, { onclick: () => cell.actions.newGif() }, "Random Gif"),
      m("button.bg-red" + buttonStyle, { onclick: () => cell.actions.reset() }, "Reset"),
      m("div.mt2", m("img", { width: 200, height: 200, src: imgsrc(state.image) }))
    )
  }
}
