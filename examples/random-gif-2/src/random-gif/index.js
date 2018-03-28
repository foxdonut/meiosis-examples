const uuid = require("uuid");
const { Loaded, Success, Image } = require("./types");
const { createActions } = require("./actions");
const { createView } = require("./view");

/*
const randomGif = {
  reload: ({update, event, model}) =>
    newGif({update, event, id: model.id, tag: model.tag})()
};
*/

exports.createRandomGif = actions => update => ({
  model: () => ({
    id: uuid.v1(),
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),

  view: createView(createActions(update, actions))
});
