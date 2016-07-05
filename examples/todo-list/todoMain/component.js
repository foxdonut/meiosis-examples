import initialModel from "./model";
import view from "./view.jsx";
import receive from "./receive";
import services from "./services";
import { createActions } from "./actions";

import todoFormView from "../todoForm/view.jsx";
import todoListView from "../todoList/view.jsx";

export default function(createComponent) {
  const actions = createActions(services);

  const todoForm = createComponent({view: todoFormView, actions});
  const todoList = createComponent({view: todoListView, actions});

  return createComponent({
    initialModel,
    actions,
    view: view(todoForm, todoList),
    receive: receive,
    ready: actions => actions.loadList()
  });
}
