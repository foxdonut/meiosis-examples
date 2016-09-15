import { merge } from "ramda";
import { emptyTodo } from "./model";
import validate from "./validation";

const receive = (model, proposal) => {
  let modelUpdate = proposal.case({
    EditTodo: todo => ({ todo, validationErrors: {} }),
    EditingTodo: todo => ({ todo }),
    ValidateTodo: todo => ({ validationErrors: validate(todo) }),
    ClearForm: () => ({ todo: emptyTodo(), validationErrors: {} }),

    _: () => null
  });

  if (modelUpdate) {
    return merge(model, modelUpdate);
  }
  return model;
};

export default receive;
