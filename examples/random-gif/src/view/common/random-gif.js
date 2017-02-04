import { stream } from "meiosis";
import prevDef from "prevent-default";

export const intents = {
  editTag: stream(),
  newGif: stream()
};

export const onEditTag = id => prevDef(evt => intents.editTag({ id, tag: evt.target.value }));
export const onNewGif = (id, tag) => prevDef(() => intents.newGif({ id, tag }));
