import Vue from "vue";

export default function(actions) {
  Vue.component("todo-item", {
    props: ["todo"],
    template: `
      <tr>
        <td>{{todo.priority}}</td>
        <td>{{todo.description}}</td>
        <td>
          <button class="btn btn-primary btn-xs" v-on:click="onEdit(todo)">Edit</button>
          <span> </span>
          <button class="btn btn-danger btn-xs" v-on:click="onDelete(todo)">Delete</button>
        </td>
      </tr>
    `,
    methods: {
      onEdit: todo => evt => {
        evt.preventDefault();
        actions.editTodo(todo);
      },

      onDelete: todo => evt => {
        evt.preventDefault();
        actions.deleteTodo(todo.id);
      }
    }
  });
}
