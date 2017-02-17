import stream from "mithril/stream";
import prevDef from "prevent-default";

export const randomGifActions = {
  editTag: stream(),
  newGif: stream()
};

export const randomGifIntents = {
  editTag: id => prevDef(evt => randomGifActions.editTag({ id, tag: evt.target.value })),
  newGif: (id, tag) => prevDef(() => randomGifActions.newGif({ id, tag }))
};
