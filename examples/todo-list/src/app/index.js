import { actions } from "./actions";
import { view } from "./view.jsx";
import { Todos } from "../todos";
import { ajaxServices } from "../util/ajax-services";
import { ProjectsPage } from "../util/constants";

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList => {
  const componentActions = actions(update);
  const allActions = Object.assign(
    componentActions,
    Todos.actions(update, componentActions)
  );

  const todos = Todos.view(allActions);

  return {
    model: () => Object.assign(
      {
        pageId: ProjectsPage,
        message: ""
      },
      Todos.model({ initialTodoList })
    ),
    view: view({ actions: allActions, todos })
  };
});
