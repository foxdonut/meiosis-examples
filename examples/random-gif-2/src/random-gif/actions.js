const m = require("mithril");
const { assoc } = require("ramda");
const { Loaded, Success, Image } = require("./types");

const gif_new_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "dc6zaTOxFJmzC";

exports.createActions = (update, actions) => ({
  editTag: event => update(assoc("tag", event.target.value)),

  newGif: (id, tag) => _event => {
    actions.newGif();
    update(assoc("image", Loaded.N()));
    m.request({ url: gif_new_url, data: { api_key, tag }}).
      then(response => update(assoc("image", Loaded.Y(Success.Y(Image.Y(response.data.image_url)))))).
      catch(() => update(assoc("image", Loaded.Y(Success.N()))));
  }
});
