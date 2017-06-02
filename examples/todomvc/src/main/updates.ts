import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  updateTodo: (todo: Todo) => update((model: Model) => {
    model.todosById[todo.id] = todo;
    model.editTodo = { };
    return model;
  })
});
