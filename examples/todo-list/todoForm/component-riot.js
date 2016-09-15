import riot from "riot";
import serialize from "form-serialize";

const inputField = property => `
  <input type="text" id="${property}" name="${property}" class="form-control"
   value="{ opts.todo.${property} }" onkeyup="{ onChangeText }" />`;

const errorMessage = property => `
  <span if="{ opts.errors.${property} }" class="has-error">
    <span class="help-block">{ opts.errors.${property} }</span>
  </span>`;

export default function(actions) {
  riot.tag("todo-form", `
    <form>
      <input type="hidden" name="id" value="{ opts.todo.id }"/>
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
        <button class="btn btn-primary btn-xs" onclick="{ onSave }">Save</button>
        <button class="btn btn-danger btn-xs" onclick="{ onCancel }">Cancel</button>
      </div>
    </form>
  `, function() {
    const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });
    this.onChangeText = evt => actions.editTodo(getTodo(evt));
    this.onSave = evt => actions.saveTodo(getTodo(evt));
    this.onCancel = actions.clearForm;
  });
}
