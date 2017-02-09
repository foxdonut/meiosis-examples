import { stream } from "meiosis";
import prevDef from "prevent-default";

export const randomGifListActions = {
  add: stream(),
  remove: stream()
};

export const randomGifListIntents = {
  add: prevDef(() => randomGifListActions.add(true)),
  remove: id => prevDef(() => randomGifListActions.remove(id))
};
