import Vue from "vue";

const inputField = property => `
  <input type="text" id="${property}" name="${property}" class="form-control"
    v-model="todo.${property}"/>`;

const errorMessage = property => `
  <span v-if="errors['${property}']" class="has-error">
    <span class="help-block">{{errors.${property}}}</span>
  </span>`;

export default function(actions) {
  Vue.component("todo-form", {
    props: ["todo", "errors"],
    template: `
      <div class="row">
        <div class="col-md-4">
          <form>
            <input type="hidden" name="id" v-model="todo.id"/>
            <div class="form-group">
              <label for="priority">Priority:</label>
              ${inputField("priority")}
              ${errorMessage("priority")}
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              ${inputField("description")}
              ${errorMessage("description")}
            </div>
            <div>
              <button class="btn btn-primary btn-xs" v-on:click.prevent="onSave(todo)">Save</button>
              <button class="btn btn-danger btn-xs" v-on:click.prevent="onCancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    `,
    methods: {
      onSave: actions.validateTodo,
      onCancel: actions.clearForm
    }
  });
}
