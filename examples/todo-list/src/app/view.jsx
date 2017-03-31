import Inferno from "inferno";

export const createView = components =>
  model => (
    <div>
      <div className="row">
        <div className="col-md-4">
          {components.todoForm(model.form)}
        </div>
      </div>
      {components.todoList(model.list)}
    </div>
  );
