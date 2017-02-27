import Inferno from "inferno";
import { todoFormView } from "../todoForm/view-inferno.jsx";
import { todoListView } from "../todoList/view-inferno.jsx";

export const view = model => (
  <div>
    <ul className="nav nav-pills">
      <li role="presentation" className="active">
        <a className="btn btn-xs btn-default" href="index-inferno.html">Inferno + JSX version</a>
      </li>
      <li role="presentation">
        <a className="btn btn-xs btn-default" href="index-react.html">React + JSnoX version</a>
      </li>
    </ul>
    <div className="row">
      <div className="col-md-4">
        {todoFormView(model.form)}
      </div>
    </div>
    {todoListView(model.list)}
  </div>
);
