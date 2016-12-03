import h from "../util/jsnox-react";

const view = (todoForm, todoList) => model =>
  h("div",
    h("div.row",
      h("div.col-md-4",
        todoForm(model)
      )
    ),
    todoList(model)
  );

export default view;
