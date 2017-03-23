import Inferno from "inferno";
import { nest } from "../util/nest";
import { todoForm } from "../todoForm/index-inferno";
import { todoList } from "../todoList/index-inferno";

export const view = (model, update, events) => (
  <div>
    <div className="ui two item menu">
      <a className="item active">Inferno + JSX + Semantic</a>
      <a className="item" href="index-react.html">React + JSnoX + ant design</a>
    </div>
    <div className="row">
      <div className="col-md-4">
        {todoForm.view(model.form, nest(update, "form"), events)}
      </div>
    </div>
    {todoList.view(model.list, nest(update, "list"), events)}
  </div>
);
