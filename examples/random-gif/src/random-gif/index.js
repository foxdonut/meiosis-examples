const uuid = require("uuid");
const { Loaded, Success, Image } = require("./types");
const { createActions } = require("./actions");
const { createView } = require("./view");

exports.createRandomGif = parentActions => update => {
  const actions = createActions(update, parentActions);

  return {
    model: () => ({
      id: uuid.v1(),
      image: Loaded.Y(Success.Y(Image.N())),
      tag: ""
    }),

    actions,

    view: createView(actions)
  };
};
