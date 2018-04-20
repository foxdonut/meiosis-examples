const R = require("ramda");
const { createActions } = require("./actions");
const { createView } = require("./view");

const state = model => R.assoc("hasGifs", R.any(
  R.equals("Y"),
  R.map(R.path(["image", "value", "value", "case"]), model.randomGifs)
), model);

exports.createRandomGifList = createRandomGif => update => {
  const randomGif = createRandomGif(func =>
    update(R.over(R.lensPath(["randomGifs", 0]), func)));

  const actions = createActions(update, randomGif);

  return {
    model: () => ({
      randomGifs: []
    }),
    state,
    view: createView(actions, randomGif)
  }
};
