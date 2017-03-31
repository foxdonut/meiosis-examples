import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  cancelEdit: () => update((model: Model) => {
    model.editTodo = { };
    return model;
  }),
  editingTodo: (id: string, title: string) => update((model: Model) => {
    model.editTodo = ({ id, title });
    return model;
  }),
  updateTodo: (todo: Todo) => update((model: Model) => {
    model.todosById[todo.id] = todo;
    model.editTodo = { };
    return model;
  })
});
