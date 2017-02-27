import h from "../util/jsnox-react";
import { intents } from "./actions";

export const todoFormView = model => {
  const inputField = (name, value) =>
    h(`input:text#${name}.form-control[name=${name}]`, { value, onChange: intents.editingTodo(name) });

  const errorMessage = errors => errors ?
    h("span.has-error", h("span.help-block", errors[0])) : null;

  const inputDiv = (field, label) =>
    h("div.form-group",
      h(`label[htmlFor=${field}]`, label),
      inputField(field, model.todo[field]),
      errorMessage(model.validationErrors[field])
    );

  return h("form",
    h("input:hidden[name=id]", { value: model.todo.id }),
    inputDiv("priority", "Priority:"),
    inputDiv("description", "Description:"),
    h("div",
      h("button.btn.btn-primary.btn-xs", { onClick: intents.saveTodo(model.todo) }, "Save"),
      h("button.btn.btn-danger.btn-xs", { onClick: intents.clearForm }, "Cancel")
    )
  );
};
