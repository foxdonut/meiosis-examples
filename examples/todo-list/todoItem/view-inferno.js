import { createVElement as h } from "inferno";

const view = actions => todo => {
  const onEdit = todo => evt => {
    evt.preventDefault();
    actions.editTodo(todo);
  };

  const onDelete = todo => evt => {
    evt.preventDefault();
    actions.deleteTodo(todo.id);
  };

  return h("tr", null, [
    h("td", null, String(todo.priority)),
    h("td", null, todo.description),
    h("td", null, [
      h("button", { className: "btn btn-primary btn-xs", onClick: onEdit(todo) }, "Edit"),
      h("button", { className: "btn btn-danger btn-xs", onClick: onDelete(todo) }, "Delete")
    ])
  ], todo.id);
};

export default view;
