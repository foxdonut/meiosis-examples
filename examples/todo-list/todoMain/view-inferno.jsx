import Inferno from "inferno";

const view = (todoForm, todoList) => model => (
  <div>
    <div className="row">
      <div className="col-md-4">
        {todoForm(model)}
      </div>
    </div>
    {todoList(model)}
  </div>
);

export default view;
