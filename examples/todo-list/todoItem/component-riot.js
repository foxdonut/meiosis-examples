import riot from "riot";

export default function(actions) {
  riot.tag("todo-item", `
    <td>{ todo.priority }</td>
    <td>{ todo.description }</td>
    <td>
      <button class="btn btn-primary btn-xs" onclick="{ opts.onEdit(todo) }">Edit</button>
      <span> </span>
      <button class="btn btn-danger btn-xs" onclick="{ opts.onDelete(todo) }">Delete</button>
    </td>
  `, (opts) => {
    opts.onEdit = todo => _evt => actions.editTodo(todo);
    opts.onDelete = todo => _evt => actions.deleteTodo(todo.id);
  });
}
