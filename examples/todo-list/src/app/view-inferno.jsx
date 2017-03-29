import Inferno from "inferno";
import { nest } from "../util/nest";
import { todoForm } from "../todoForm/index-inferno";
import { todoList } from "../todoList/index-inferno";

export const view = (update, events) => {
  const todoFormView = todoForm.create(nest(update, "form"), events.form);
  const todoListView = todoList.create(nest(update, "list"), events.list);

  return model => (
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
}