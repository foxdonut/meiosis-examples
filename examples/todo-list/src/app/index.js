import { createView } from "./view.jsx";
import { todoForm } from "../todoForm";
import { todoList } from "../todoList";
import { nest } from "../util/nest";

export const app = {
  model: () => ({
    form: todoForm.model(),
    list: todoList.model()
  }),
  create: (update, events) => {
    const components = {
      todoForm: todoForm.create(nest(update, "form"), events.form),
      todoList: todoList.create(nest(update, "list"), events.list)
    };

    return createView(components);
  }
};
