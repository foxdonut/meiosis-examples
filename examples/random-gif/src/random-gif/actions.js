import m from "mithril"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "HMUbJEROIPi2Dodeq0thL28emz5CMCRX"
// const api_key = "dc6zaTOxFJmzC"

export const Actions = update => ({
  editTag: (id, tag) => update({ [id]: { tag } }),

  newGif: function (id, state) {
    const self = this

    update({ [id]: { image: Loaded.N() } })

    m.request({ url: gif_new_url, params: { api_key, tag: state[id].tag } })
      .then(response => {
        update({
          [id]: {
            image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
          }
        })
        self.newGifGenerated()
      })
      .catch(() => update({ [id]: { image: Loaded.Y(Success.N()) } }))
  },

  reset: id => update({ [id]: { image: Loaded.Y(Success.Y(Image.N())) } })
})
