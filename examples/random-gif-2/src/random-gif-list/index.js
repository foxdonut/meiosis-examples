const R = require("ramda");
const { createActions } = require("./actions");
const { createView } = require("./view");

export const createRandomGifList = createRandomGif => update => {
  const randomGif = createRandomGif(modelUpdate =>
    update({ fn: R.over(R.lensPath(["randomGifsById", modelUpdate.id]), modelUpdate.fn) }));

  const actions = createActions(update, randomGif);

  return {
    model: () => ({
      randomGifIds: [],
      randomGifsById: {}
    }),
    view: createView(actions, randomGif)
  }
};
