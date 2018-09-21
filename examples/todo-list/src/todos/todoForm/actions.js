import { assoc, assocPath, compose } from "ramda";

export const createActions = id => update => ({
  editingTodo: (field, value) => update(model =>
    assocPath([id, "todo"], assoc(field, value, model[id].todo), model)),

  clearForm: () => update(assoc(id, { todo: { }, validationErrors: { } })),

  editTodo: todo => update(
    compose(
      assocPath([id, "todo"], todo),
      assocPath([id, "validationErrors"], { })
    )
  ),

  showValidationErrors: validationErrors =>
    update(assocPath([id, "validationErrors"], validationErrors))
});
