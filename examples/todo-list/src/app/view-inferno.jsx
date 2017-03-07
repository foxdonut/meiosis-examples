import Inferno from "inferno";
import { todoFormView } from "../todoForm/view-inferno.jsx";
import { todoListView } from "../todoList/view-inferno.jsx";

export const view = model => (
  <div>
    <div className="ui two item menu">
      <a className="item active">Inferno + JSX + Semantic</a>
      <a className="item" href="index-react.html">React + JSnoX + ant design</a>
    </div>
    <div className="row">
      <div className="col-md-4">
        {todoFormView(model.form)}
      </div>
    </div>
    {todoListView(model.list)}
  </div>
);
