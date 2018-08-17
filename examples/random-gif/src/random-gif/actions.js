const m = require("mithril")
const { assoc } = require("ramda")
const { Loaded, Success, Image } = require("./types")
const { signals } = require("./signals")

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

exports.actions = ({
  editTag: (update, tag) => update(assoc("tag", tag)),

  newGif: (update, tag) => {
    update(assoc("image", Loaded.N()))
    m.request({ url: gif_new_url, data: { api_key, tag }}).
      then(response => {
        update(assoc("image", Loaded.Y(Success.Y(Image.Y(response.data.image_url)))))
        signals.newGif(true)
      }).
      catch(() => update(assoc("image", Loaded.Y(Success.N()))))
  },

  reset: update => update(assoc("image", Loaded.Y(Success.Y(Image.N()))))
})
