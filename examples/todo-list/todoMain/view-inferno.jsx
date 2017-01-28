import Inferno from "inferno";
import { todoFormView } from "../todoForm/view-inferno.jsx";
import { todoListView } from "../todoList/view-inferno.jsx";

export const view = model => (
  <div>
    <div>Inferno + JSX | <a href="index-react.html">React + JSnoX</a></div>
    <div className="row">
      <div className="col-md-4">
        {todoFormView(model.form)}
      </div>
    </div>
    {todoListView(model.list)}
  </div>
);
