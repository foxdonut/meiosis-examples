import riot from "riot";
import serialize from "form-serialize";

export default function(actions) {
  riot.tag("todo-form", `
    <div class="row">
      <div class="col-md-4">
        <form>
          <input type="hidden" name="id" value="{ opts.todo.id }"/>
          <div class="form-group">
            <label for="priority">Priority:</label>
            <input type="text" id="priority" name="priority" class="form-control"
              value="{ opts.todo.priority }" />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" id="description" name="description" class="form-control"
              value="{ opts.todo.description }" />
          </div>
          <div>
            <button class="btn btn-primary btn-xs" onclick="{ onSave }">Save</button>
            <span> </span>
            <button class="btn btn-danger btn-xs" onclick="{ onCancel }">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `, function() {
    const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });
    this.onSave = evt => actions.saveTodo(getTodo(evt));
    this.onCancel = actions.clearForm;
  });
}
