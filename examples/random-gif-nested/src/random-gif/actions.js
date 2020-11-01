import m from "mithril"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "HMUbJEROIPi2Dodeq0thL28emz5CMCRX"
// const api_key = "dc6zaTOxFJmzC"

export const Actions = update => ({
  editTag: (local, tag) => update(local.patch({ tag })),

  newGif: local => {
    update(local.patch({ image: Loaded.N() }))

    m.request({ url: gif_new_url, params: { api_key, tag: local.state.tag } })
      .then(response => {
        update([
          local.patch({ image: Loaded.Y(Success.Y(Image.Y(response.data.image_url))) }),
          {
            events: {
              newGifGenerated: true
            }
          }
        ])
      })
      .catch(() => update(local.patch({ image: Loaded.Y(Success.N()) })))
  },

  reset: local => update(local.patch({ image: Loaded.Y(Success.Y(Image.N())) }))
})
