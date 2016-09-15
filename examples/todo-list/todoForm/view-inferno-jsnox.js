import h from "../util/jsnox-inferno";
import serialize from "form-serialize";

const view = (model, actions) => {
  const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });

  const onChangeText = evt => actions.editTodo(getTodo(evt));

  const onSave = evt => {
    evt.preventDefault();
    actions.saveTodo(model.todo);
  };

  const onCancel = function(evt) {
    evt.preventDefault();
    actions.clearForm();
  };

  const inputField = (name, value) =>
    h("input:text#" + name + ".form-control[name=" + name + "]", { value, onKeyUp: onChangeText });

  const errorMessage = error => error ?
    h("span.has-error", [h("span.help-block", error)]) : null;

  const inputDiv = (field, label) =>
    h("div.form-group", [
      h("label[for=" + field +"]", label),
      inputField(field, model.todo[field]),
      errorMessage(model.validationErrors[field])
    ]);

  return h("form", [
    h("input:hidden[name=id][value=" + model.todo.id + "]"),
    inputDiv("priority", "Priority:"),
    inputDiv("description", "Description:"),
    h("div", [
      h("button.btn.btn-primary.btn-xs", { onClick: onSave }, "Save"),
      h("button.btn.btn-danger.btn-xs", { onClick: onCancel }, "Cancel")
    ])
  ]);
};

export default view;
