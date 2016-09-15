import { createVElement as h } from "inferno";
import todoItem from "../todoItem/view-inferno";

const view = (model, actions) => {
  const renderTodo = todoItem(actions);

  return h("div", { className: "row" }, [
    h("div", { className: "col-md-8" }, [
      h("div", null, model.message),
      h("table", { className: "table table-bordered table-striped table-hover" }, [
        h("thead", null, [
          h("tr", null, [
            h("th", null, "Priority"),
            h("th", null, "Description"),
            h("th", null, "Action")
          ])
        ]),
        h("tbody", null, model.todos.map(renderTodo))
      ])
    ])
  ]);
  /*
    <div className="row">
      <div className="col-md-8">
        <div>Todo List: {model.message}</div>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {model.todos.map(renderTodo)}
          </tbody>
        </table>
      </div>
    </div>
  );
  */
};

export default view;
