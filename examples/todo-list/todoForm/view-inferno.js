import { createVElement as h } from "inferno";
import serialize from "form-serialize";

const view = (model, actions) => {
  const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });

  const onChangeText = evt => actions.editingTodo(getTodo(evt));

  const onSave = evt => {
    evt.preventDefault();
    actions.saveTodo(model.todo);
  };

  const onCancel = function(evt) {
    evt.preventDefault();
    actions.clearForm();
  };

  const inputField = (name, value) =>
    h("input", { type: "text", id: name, name, className: "form-control", value, onKeyUp: onChangeText });

  const errorMessage = error => error ?
    h("span", { className: "has-error" }, [h("span", { className: "help-block" }, error)]) : null;

  const inputDiv = (field, label) =>
    h("div", { className: "form-group"}, [
      h("label", { htmlFor: field }, label),
      inputField(field, model.todo[field]),
      errorMessage(model.validationErrors[field])
    ]);

  return h("form", null, [
    h("input", { type: "hidden", name: "id", value: String(model.todo.id) }),
    inputDiv("priority", "Priority:"),
    inputDiv("description", "Description:"),
    h("div", null, [
      h("button", { className: "btn btn-primary btn-xs", onClick: onSave }, "Save"),
      h("button", { className: "btn btn-danger btn-xs", onClick: onCancel }, "Cancel")
    ])
  ]);
};

export default view;
