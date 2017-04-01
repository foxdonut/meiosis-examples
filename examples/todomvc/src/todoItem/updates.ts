import * as _ from "lodash";
import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  deleteTodoId: (todoId: string) => update((model: Model) => {
    delete model.todosById[todoId];
    model.todoIds.splice(model.todoIds.indexOf(todoId), 1);
    return model;
  }),

  editTodo: (todo: Todo) => update((model: Model) =>
    _.set(model, "editTodo", todo)),

  setCompleted: (todoId: string, completed: boolean) => update((model: Model) =>
    _.set(model, ["todosById", todoId, "completed"], completed))
});
