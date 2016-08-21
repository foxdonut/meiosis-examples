import Vue from "vue";

export default function(actions) {
  Vue.component("todo-form", {
    props: ["todo"],
    template: `
      <div class="row">
        <div class="col-md-4">
          <form>
            <input type="hidden" name="id" v-model="todo.id"/>
            <div class="form-group">
              <label for="priority">Priority:</label>
              <input type="text" id="priority" name="priority" class="form-control" v-model="todo.priority"/>
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              <input type="text" id="description" name="description" class="form-control" v-model="todo.description"/>
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
      onSave: actions.saveTodo,
      onCancel: actions.clearForm
    }
  });
}
