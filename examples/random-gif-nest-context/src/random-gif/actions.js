import m from "mithril"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "HMUbJEROIPi2Dodeq0thL28emz5CMCRX"
// const api_key = "dc6zaTOxFJmzC"

export const Actions = context => ({
  editTag: tag => context.update({ tag }),

  newGif: context => {
    context.update({ image: Loaded.N() })

    m.request({ url: gif_new_url, params: { api_key, tag: context.getState().tag } })
      .then(response => {
        context.update({ image: Loaded.Y(Success.Y(Image.Y(response.data.image_url))) })
        context.root.actions.newGifGenerated()
      })
      .catch(() => context.update({ image: Loaded.Y(Success.N()) }))
  },

  reset: () => context.update({ image: Loaded.Y(Success.Y(Image.N())) })
})
