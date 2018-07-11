const R = require("ramda");

exports.createActions = (update, randomGif) => ({
  add: _event => update(model => {
    const randomGifModel = randomGif.model();
    model.randomGifIds.push(randomGifModel.id);
    model.randomGifsById[randomGifModel.id] = randomGifModel;
    return model;
  }),

  remove: id => update(model => {
    const index = R.findIndex(R.propEq("id", id), model.randomGifs);
    model.randomGifs.splice(index, 1);
    return model;
  }),

  resetAll: model => model.randomGifs.forEach(randomGif.actions.reset)
});
