import * as _ from "lodash";
import { Model, Todo, UpdateFunction } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  cancelEdit: () => update((model: Model) =>
    _.set(model, "editTodo", { })),

  editingTodo: (id: string, title: string) => update((model: Model) =>
    _.set(model, "editTodo", { id, title }))
});
