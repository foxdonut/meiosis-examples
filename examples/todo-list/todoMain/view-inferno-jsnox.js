import h from "../util/jsnox-inferno";

const view = (todoForm, todoList) => model =>
  h("div", [
    h("div.row", [
      h("div.col-md-4", [
        todoForm(model.store.form)
      ])
    ]),
    todoList(model.store.list)
  ]);

export default view;
