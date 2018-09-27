import { model } from "./model";
import { actions } from "./actions";
import { view } from "./view.jsx";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";
import { TodoItem } from "./todoList/todoItem";//FIXME

export const Todos = {
  model: data => Object.assign(
    model(data),
    { todoForm: TodoForm.model(data) }
  ),
  actions: (update, parentActions) => {
    const componentActions = Object.assign(parentActions, actions(update, parentActions));
    return Object.assign(
      componentActions,
      TodoForm.actions(update, componentActions),
      TodoItem.actions(update, componentActions)
    );
  },
  view: actions => {
    const todoForm = TodoForm.view(actions);
    const todoList = TodoList.view(actions);
    return view({ actions, todoForm, todoList });
  }
};
