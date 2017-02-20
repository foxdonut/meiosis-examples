import m from "mithril";
import { todoEditView } from "../todoEdit/view-mithril";
//import { createItemActions } from "../common/todoItem/actions";
import { state } from "./state";
import { getTodoClasses } from "./display";

const onToggleTodo = () => null;
const onEditTodo = () => null;
const onDestroyTodo = () => null;

export const todoItemView = model => todo => {
  const editing = state.editing(model, todo);

  return m("li", { class: getTodoClasses(model, todo) },
    m("div.view",
      m("input.toggle[type=checkbox]", { checked: todo.completed,
        onchange: onToggleTodo(todo.id) }),
      m("label", { ondblclick: onEditTodo(todo) }, todo.title),
      m("button.destroy", { onclick: onDestroyTodo(todo.id) })
    ),
    editing ? todoEditView(model.editTodo) : null
  );
};
