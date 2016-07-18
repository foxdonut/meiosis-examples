import { createComponent } from "meiosis";
import initialModel from "./model";
import view from "./view-react.jsx";
import receive from "./receive";
import services from "./services";
import { createActions } from "./actions";

import todoFormView from "../todoForm/view-react.jsx";
import todoListView from "../todoList/view-react.jsx";

export default function() {
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
