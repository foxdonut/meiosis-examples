import Inferno from "inferno";
import todoItem from "../todoItem/view-inferno.jsx";

const view = (model, actions) => {
  const renderTodo = todoItem(actions);

  return (
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
};

export default view;
