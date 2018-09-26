import { model } from "./model";
import { actions } from "./actions";
import { view } from "./view.jsx";
import { TodoForm } from "../../todoForm";

export const TodoItem = {
  model,
  actions,
  view: actions => {
    const todoForm = TodoForm.view(actions);
    return view({ actions, todoForm })
  }
};
