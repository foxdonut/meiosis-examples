import Inferno from "inferno";

const view = actions => todo => {
  const onEdit = todo => evt => {
    evt.preventDefault();
    actions.editTodo(todo);
  };

  const onDelete = todo => evt => {
    evt.preventDefault();
    actions.deleteTodo(todo.id);
  };

  return (
    <tr key={todo.id}>
      <td>{todo.priority}</td>
      <td>{todo.description}</td>
      <td>
        <button className="btn btn-primary btn-xs" onClick={onEdit(todo)}>Edit</button>
        <button className="btn btn-danger btn-xs" onClick={onDelete(todo)}>Delete</button>
      </td>
    </tr>
  );
};

export default view;
