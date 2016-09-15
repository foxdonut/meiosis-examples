import { createVElement as h } from "inferno";

const view = (todoForm, todoList) => model =>
  h("div", null, [
    h("div", { className: "row" }, [
      h("div", { className: "col-md-4"}, [
        todoForm(model.store.form)
      ])
    ]),
    todoList(model.store.list)
  ]);

export default view;
