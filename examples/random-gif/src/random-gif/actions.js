const m = require("mithril")
const O = require("patchinko/constant")
const R = require("ramda")

const { Loaded, Success, Image } = require("./types")

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

exports.createActions = update => ({
  editTag: (id, tag) => update(R.objOf(id, O({ tag }))),

  newGif: (id, tag) => {
    update(R.objOf(id, O({ image: Loaded.N() })))
    m.request({ url: gif_new_url, data: { api_key, tag }}).
      then(response =>
        update({
          [id]: O({
            image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
          }),
          "event:newGifGenerated": new Date().getTime()
        })
      ).
      catch(() => update(R.objOf(id, O({ image: Loaded.Y(Success.N()) }))))
  },

  reset: id => update(R.objOf(id, O({ image: Loaded.Y(Success.Y(Image.N())) })))
})
