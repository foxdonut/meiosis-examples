import { Root } from "../root";
import { ajaxServices } from "../util/ajax-services";
import { wirem } from "../util/wirem";

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList =>
  wirem({
    component: Root,
    data: { initialTodoList },
    update
  })
);
