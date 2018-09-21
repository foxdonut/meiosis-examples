// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const createView = (id, { todoList, todoForm }) => actions => {
  const todoFormView = todoForm.createView(actions);
  const todoListView = todoList.createView(actions);

  return model => (
    <div>
      <div className="row">
        <div className="col-md-4">
          {todoFormView(model)}
        </div>
      </div>
      {todoListView(model)}
    </div>
  );
};
