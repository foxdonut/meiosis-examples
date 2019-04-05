import m from "mithril"

import { events } from "../events"
import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

export const actions = {
  editTag: tag => ({ tag }),

  newGif: ({ root, local }) => {
    local.update({ image: Loaded.N() })

    m.request({ url: gif_new_url, data: { api_key, tag: local.state.tag } })
      .then(response => {
        local.update({
          image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
        })
        root.update(events.actions.newGifGenerated(root.state))
      })
      .catch(() => local.update({ image: Loaded.Y(Success.N()) }))
  },

  reset: () => ({ image: Loaded.Y(Success.Y(Image.N())) })
}
