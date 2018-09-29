import { Root } from "../root";
import { ajaxServices } from "../util/ajax-services";
import { wirem } from "../util/wirem";

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList => {
  const app = wirem({
    component: Root,
    data: { initialTodoList },
    update
  });
  app.state = Root.state;
  app.nextAction = Root.nextAction(app.actions);
  return app;
});
