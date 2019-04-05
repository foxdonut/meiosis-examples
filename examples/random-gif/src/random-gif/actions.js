import m from "mithril"
import O from "patchinko/constant"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

export const actions = ({ update, newGifGenerated }) => ({
  editTag: tag => O({ tag }),

  newGif: ({ root, local }) => {
    local.update(O({ image: Loaded.N() }))
    m.request({ url: gif_new_url, data: { api_key, tag: local.state.tag } })
      .then(response => {
        local.update(
          O({
            image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
          })
        )
        root.update(newGifGenerated(root.state))
      })
      .catch(() => local.update(O({ image: Loaded.Y(Success.N()) })))
  },

  reset: id => update({ [id]: O({ image: Loaded.Y(Success.Y(Image.N())) }) })
})
