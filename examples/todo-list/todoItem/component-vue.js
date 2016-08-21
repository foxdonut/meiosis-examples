import Vue from "vue";
import { compose, prop } from "ramda";

export default function(actions) {
  Vue.component("todo-item", {
    props: ["todo"],
    template: `
      <tr>
        <td>{{todo.priority}}</td>
        <td>{{todo.description}}</td>
        <td>
          <button class="btn btn-primary btn-xs" v-on:click.prevent="onEdit(todo)">Edit</button>
          <button class="btn btn-danger btn-xs" v-on:click.prevent="onDelete(todo)">Delete</button>
        </td>
      </tr>
    `,
    methods: {
      onEdit: actions.editTodo,
      onDelete: compose(actions.deleteTodo, prop("id"))
    }
  });
}
