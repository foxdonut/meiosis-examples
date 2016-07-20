import Vue from "vue";
import createTodoItem from "../todoItem/component-riot";

export default function(actions) {
  createTodoItem(actions);

  Vue.component("todo-list", {
    props: ["todos", "message"],
    template: `
      <div class="row">
        <div class="col-md-8">
          <div>Todo List: {{message}}</div>
          <table class="table ng-table">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr is="todo-item" v-for="todo in todos" :todo="todo"></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  });
}
