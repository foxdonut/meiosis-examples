// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const view = ({ todoForm, todoList }) => model => (
  <div>
    <div className="row">
      <div className="col-md-4">
        {todoForm(model, "todoForm")}
      </div>
    </div>
    {todoList(model)}
  </div>
);
