import { model } from "./model";
import { actions } from "./actions";
import { view } from "./view.jsx";

export const TodoItem = {
  model,
  actions,
  view: actions => view({ actions })
};
