import { assoc, merge } from "ramda";
import { actions } from "./actions";

export const emptyTodo = () => ({
  id: "",
  priority: "",
  description: ""
});

export const model = () => ({
  todo: emptyTodo(),
  validationErrors: {}
});
