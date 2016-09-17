import h from "../util/jsnox-react";

const view = actions => todo => {
  const onEdit = todo => evt => {
    evt.preventDefault();
    actions.editTodo(todo);
  };

  const onDelete = todo => evt => {
    evt.preventDefault();
    actions.deleteTodo(todo.id);
  };

  return h("tr", [
    h("td", String(todo.priority)),
    h("td", todo.description),
    h("td", [
      h("button.btn.btn-primary.btn-xs", { onClick: onEdit(todo) }, "Edit"),
      h("button.btn.btn-danger.btn-xs", { onClick: onDelete(todo) }, "Delete")
    ])
  ], todo.id);
};

export default view;
