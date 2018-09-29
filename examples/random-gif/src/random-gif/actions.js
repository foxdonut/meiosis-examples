const m = require("mithril")
const O = require("patchinko/constant")
const R = require("ramda")

const { Loaded, Success, Image } = require("./types")

const gif_new_url = "https://api.giphy.com/v1/gifs/random"
const api_key = "dc6zaTOxFJmzC"

exports.actions = ({ update, actions }) => ({
  editTag: (id, tag) => update(R.objOf(id, O({ tag }))),

  newGif: (id, model) => {
    update(R.objOf(id, O({ image: Loaded.N() })))
    m.request({ url: gif_new_url, data: { api_key, tag: model[id].tag }}).
      then(response => {
        update({
          [id]: O({
            image: Loaded.Y(Success.Y(Image.Y(response.data.image_url)))
          })
        })
        actions.newGifGenerated(model)
      }).
      catch(() => update(R.objOf(id, O({ image: Loaded.Y(Success.N()) }))))
  },

  reset: id => update(R.objOf(id, O({ image: Loaded.Y(Success.Y(Image.N())) })))
})
