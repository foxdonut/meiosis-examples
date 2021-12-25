// @ts-check
import m from "mithril"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "HMUbJEROIPi2Dodeq0thL28emz5CMCRX"
// const api_key = "dc6zaTOxFJmzC"

export const Actions = cell => ({
  editTag: tag => cell.update({ tag }),

  newGif: () => {
    cell.update({ image: Loaded.N() })

    m.request({ url: gif_new_url, params: { api_key, tag: cell.getState().tag } })
      .then(response => {
        cell.update({ image: Loaded.Y(Success.Y(Image.Y(response.data.image_url))) })
        cell.root.actions.newGifGenerated()
      })
      .catch(() => cell.update({ image: Loaded.Y(Success.N()) }))
  },

  reset: () => cell.update({ image: Loaded.Y(Success.Y(Image.N())) })
})
