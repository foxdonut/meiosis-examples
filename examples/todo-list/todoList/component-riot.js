import riot from "riot";
import createTodoItem from "../todoItem/component-riot";

export default function(actions) {
  createTodoItem(actions);

  riot.tag("todo-list", `
    <div class="row">
      <div class="col-md-8">
        <div>Todo List: { message }</div>
        <table class="table ng-table">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr riot-tag="todo-item" each="{ todo in opts.todos }"></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
  );
  /*
  <todo-item each={ model.root.todos } todo="{ this }"></todo-item>
*/
}
