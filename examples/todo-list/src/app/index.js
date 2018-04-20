import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { createTodoForm } from "../todoForm";
import { createTodoList } from "../todoList";
import { nest } from "../util/nest";

export const createApp = update => {
  const actions = createActions(update);

  const form = nest(createTodoForm(actions), update, ["form"]);
  const list = nest(createTodoList(actions), update, ["list"]);

  return {
    model: () => Object.assign({}, form.model(), list.model()),
    view: createView({ form, list })
  };
};
