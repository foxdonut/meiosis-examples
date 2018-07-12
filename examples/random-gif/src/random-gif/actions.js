const m = require("mithril")
const { assoc } = require("ramda")
const { Loaded, Success, Image } = require("./types")
const { signals } = require("./signals")

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

exports.actions = ({
  editTag: (update, id, tag) => update(assoc("tag", tag), id),

  newGif: (update, id, tag) => {
    signals.newGif(id)
    update(assoc("image", Loaded.N()), id)
    m.request({ url: gif_new_url, data: { api_key, tag }}).
      then(response =>
        update(assoc("image", Loaded.Y(Success.Y(Image.Y(response.data.image_url)))), id)).
      catch(() => update(assoc("image", Loaded.Y(Success.N())), id))
  },

  reset: (update, id) => update(assoc("image", Loaded.Y(Success.Y(Image.N()))), id)
})
