import stream from "mithril/stream";

export const actions = {
  editTag: stream(),
  newGif: stream(),
  newGifStart: stream(),
  newGifSuccess: stream(),
  newGifError: stream()
};

export const intents = {
  editTag: id => evt => actions.editTag({ id, tag: evt.target.value }),
  newGif: (id, tag) => () => actions.newGif({ id, tag })
};
