import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { createTodoForm } from "../todoForm";
import { createTodoList } from "../todoList";
import { createComponents, combineComponents } from "../util/nest";

export const createApp = update => {
  const actions = createActions(update);

  const components = createComponents(update, {
    form: createTodoForm(actions),
    list: createTodoList(actions)
  });

  return {
    model: combineComponents(components, "model"),
    view: createView(components)
  };
};
