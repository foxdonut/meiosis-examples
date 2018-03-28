exports.createActions = (update, randomGif) => ({
  add: _event => update({ fn: model => {
    const randomGifModel = randomGif.model();
    const id = randomGifModel.id;

    model.randomGifIds.push(id);
    model.randomGifsById[id] = randomGifModel;

    return model;
  } }),

  remove: id => _event => update({ fn: model => {
    delete model.randomGifsById[id];
    model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
    return model;
  } })
});
