import { UpdateFunction, ViewFunction } from "meiosis";
import { todoEdit } from "../todoEdit";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const todoItem = {
  create: (update: UpdateFunction, parentUpdates: any): ViewFunction => {
    const updates = createUpdates(update);
    const actions = createActions(updates);

    const components = {
      todoEdit: todoEdit.create(update, parentUpdates)
    };
    return createView(actions, components);
  }
};
