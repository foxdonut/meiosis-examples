import { stream } from "meiosis";
import prevDef from "prevent-default";

export const buttonActions = {
  toggle: stream()
};

export const buttonIntents = {
  toggle: prevDef(() => buttonActions.toggle(true))
};
