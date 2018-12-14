import m from "mithril"
import { PS } from "patchinko/explicit"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

export const actions = ({ update, newGifGenerated }) => ({
  editTag: (id, tag) => update({ [id]: PS({ tag }) }),

  newGif: (id, state) => {
    update({ [id]: PS({ image: Loaded.N() }) })
    m.request({ url: gif_new_url, data: { api_key, tag: state[id].tag }}).
      then(response => {
        update(Object.assign({
          [id]: PS({
            image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
          })
        }, newGifGenerated(state)))
      }).
      catch(() => update({ [id]: PS({ image: Loaded.Y(Success.N()) }) }))
  },

  reset: id => update({ [id]: PS({ image: Loaded.Y(Success.Y(Image.N())) }) })
})
