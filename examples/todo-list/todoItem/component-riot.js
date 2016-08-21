import riot from "riot";

export default function(actions) {
  riot.tag("todo-item", `
    <td>{ todo.priority }</td>
    <td>{ todo.description }</td>
    <td>
      <button class="btn btn-primary btn-xs" onclick="{ onEdit(todo) }">Edit</button>
      <button class="btn btn-danger btn-xs" onclick="{ onDelete(todo) }">Delete</button>
    </td>
  `, function() {
    this.onEdit = todo => _evt => actions.editTodo(todo);
    this.onDelete = todo => _evt => actions.deleteTodo(todo.id);
  });
}
