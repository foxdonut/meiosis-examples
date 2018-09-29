import { actions } from "./actions";
import { view } from "./view.jsx";
import { Todos } from "../todos";
import { TodoListPage } from "./constants";
import { ajaxServices } from "../util/ajax-services";
import { wirem } from "../util/wirem";

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList => {
  const Root = {
    dependencies: [
      { component: Todos, key: "todos", models: [""] }
    ],
    model: () => ({
      pageId: TodoListPage,
      message: ""
    }),
    actions,
    view
  };

  return wirem({
    component: Root,
    data: { initialTodoList },
    update
  });
});
