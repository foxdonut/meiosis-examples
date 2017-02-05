import { stream } from "meiosis";
import prevDef from "prevent-default";

export const randomGifIntents = {
  editTag: stream(),
  newGif: stream()
};

export const randomGifEvents = {
  onEditTag: id => prevDef(evt => randomGifIntents.editTag({ id, tag: evt.target.value })),
  onNewGif: (id, tag) => prevDef(() => randomGifIntents.newGif({ id, tag }))
};
