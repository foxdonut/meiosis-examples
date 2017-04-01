import * as _ from "lodash";
import { UpdateFunction } from "meiosis";
import { Model, Todo } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  cancelEdit: () => update((model: Model) =>
    _.set(model, "editTodo", { })),

  editingTodo: (id: string, title: string) => update((model: Model) =>
    _.set(model, "editTodo", { id, title }))
});
