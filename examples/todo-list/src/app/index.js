import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { createTodos } from "../todos";
import { ajaxServices } from "../util/ajax-services";
import { ProjectsPage } from "../util/constants";

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList => {
  const todos = createTodos("todos");

  const actions = Object.assign(
    createActions(update),
    todos.createActions(update)
  );

  return {
    model: () => Object.assign(
      { pageId: ProjectsPage },
      todos.model(initialTodoList)
    ),
    view: createView({ todos }, actions)
  };
});
