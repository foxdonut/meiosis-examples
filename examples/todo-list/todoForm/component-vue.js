import Vue from "vue";
import serialize from "form-serialize";

export default function(actions) {
  const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });

  const inputField = property => `
    <input type="text" id="${property}" name="${property}" class="form-control"
      value="{{todo.${property}}}" v-on:keyup="onChangeText($event)"/>`;

  const errorMessage = property => `
    <span v-if="errors['${property}']" class="has-error">
      <span class="help-block">{{errors.${property}}}</span>
    </span>`;

  const inputDiv = (field, label) =>
    `<div class="form-group">
      <label for="${field}">${label}</label>
      ${inputField(field)}
      ${errorMessage(field)}
    </div>`;

  Vue.component("todo-form", {
    props: ["todo", "errors"],
    template: `
      <form>
        <input type="hidden" name="id" v-model="todo.id"/>
        ${inputDiv("priority", "Priority:")}
        ${inputDiv("description", "Description:")}
        <div>
          <button class="btn btn-primary btn-xs" v-on:click.prevent="onSave(todo)">Save</button>
          <button class="btn btn-danger btn-xs" v-on:click.prevent="onCancel">Cancel</button>
        </div>
      </form>
    `,
    methods: {
      onChangeText: evt => actions.editingTodo(getTodo(evt)),
      onSave: actions.saveTodo,
      onCancel: actions.clearForm
    }
  });
}
