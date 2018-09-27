import { actions } from "./actions";
import { view } from "./view.jsx";
import { Todos } from "../todos";
import { ajaxServices } from "../util/ajax-services";
import { ProjectsPage } from "../util/constants";
import { wireModel, wireActions, wireView } from "../util/wirem";

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList => {
  const Root = {
    dependencies: [
      { todos: Todos }
    ],
    model: () => ({
      pageId: ProjectsPage,
      message: ""
    }),
    actions,
    view
  };

  const rootModel = wireModel(Root, { initialTodoList });
  const rootActions = wireActions(Root, update);
  const rootView = wireView(Root, rootActions);

  return {
    model: () => rootModel,
    view: rootView
  };
});
