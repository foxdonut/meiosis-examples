import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { todoForm } from "../todoForm";
import { todoList } from "../todoList";
import { nestComponent } from "../util/nest";

export const app = {
  model: () => ({
    form: todoForm.model(),
    list: todoList.model()
  }),
  create: update => {
    const actions = createActions(update);

    const components = {
      todoForm: nestComponent(todoForm.create(actions), update, ["form"]),
      todoList: nestComponent(todoList.create(actions), update, ["list"])
    };

    return createView(components);
  }
};
