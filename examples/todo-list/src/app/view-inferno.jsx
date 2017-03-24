import Inferno from "inferno";
import { nest } from "../util/nest";
import { todoForm } from "../todoForm/index-inferno";
import { todoList } from "../todoList/index-inferno";

export const view = (update, events) => {
  const todoForm = todoForm(nest(update, "form"), events.form);
  const todoList = todoList(nest(update, "list"), events.list);

  return model => (
    <div>
      <div className="ui two item menu">
        <a className="item active">Inferno + JSX + Semantic</a>
        <a className="item" href="index-react.html">React + JSnoX + ant design</a>
      </div>
      <div className="row">
        <div className="col-md-4">
          {todoForm.view(model.form, nest(update, "form"), events.form)}
        </div>
      </div>
      {todoList.view(model.list, nest(update, "list"), events.list)}
    </div>
  );
}