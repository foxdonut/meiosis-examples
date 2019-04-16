import m from "mithril"

import { Loaded, Success, Image } from "./types"

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

export const actions = update => ({
  editTag: (context, tag) => update(context.lens({ tag })),

  newGif: context => {
    update(context.lens({ image: Loaded.N() }))

    m.request({ url: gif_new_url, data: { api_key, tag: context.state.tag } })
      .then(response => {
        update(
          context.lens({
            image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
          })
        )
        // update(events.actions.newGifGenerated(context.root))
      })
      .catch(() => update(context.lens({ image: Loaded.Y(Success.N()) })))
  },

  reset: context => update(context.lens({ image: Loaded.Y(Success.Y(Image.N())) }))
})
