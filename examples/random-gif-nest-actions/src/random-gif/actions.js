import m from "mithril"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "HMUbJEROIPi2Dodeq0thL28emz5CMCRX"
// const api_key = "dc6zaTOxFJmzC"

export const Actions = actions => update => ({
  update,

  newGif: tag => {
    update({ image: Loaded.N() })

    m.request({ url: gif_new_url, params: { api_key, tag } })
      .then(response => {
        update({ image: Loaded.Y(Success.Y(Image.Y(response.data.image_url))) })
        actions.newGifGenerated()
      })
      .catch(() => update({ image: Loaded.Y(Success.N()) }))
  },

  reset: () => update({ image: Loaded.Y(Success.Y(Image.N())) })
})
