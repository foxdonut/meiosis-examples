import Inferno from "inferno";

const view = (todoForm, todoList) => model => (
  <div>
    <div className="row">
      <div className="col-md-4">
        {todoForm(model.store.form)}
      </div>
    </div>
    {todoList(model.store.list)}
  </div>
);

export default view;
