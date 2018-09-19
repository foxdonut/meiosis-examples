const m = require("mithril")
const { assoc } = require("ramda")
const { Loaded, Success, Image } = require("./types")

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

exports.createActions = update => ({
  editTag: (id, tag) => update(id, assoc("tag", tag)),

  newGif: (id, tag) => {
    update(id, assoc("image", Loaded.N()))
    m.request({ url: gif_new_url, data: { api_key, tag }}).
      then(response => {
        update(id, assoc("image", Loaded.Y(Success.Y(Image.Y(response.data.image_url)))))
        // FIXME callbacks.newGif()
      }).
      catch(() => update(id, assoc("image", Loaded.Y(Success.N()))))
  },

  reset: id => update(id, assoc("image", Loaded.Y(Success.Y(Image.N()))))
})
