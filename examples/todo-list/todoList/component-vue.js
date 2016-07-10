import Vue from "vue";
import createTodoItem from "../todoItem/component-vue";

export default function(actions) {
  createTodoItem(actions);

  Vue.component("todo-list", {
    props: ["model"],
    template: `
      <div class="row">
        <div class="col-md-8">
          <div>Todo List: {{model.message}}</div>
          <table class="table ng-table">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr is="todo-item" v-for="todo in model.todos" :todo="todo"></tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    methods: {
      onSave: evt => {
        evt.preventDefault();
        actions.saveTodo(getTodo(evt));
      },

      onCancel: evt => {
        evt.preventDefault();
        actions.clearForm();
      }
    }
  });
}
