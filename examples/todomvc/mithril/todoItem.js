import m from "mithril";
import { createTodoEdit, noTodoEdit } from "./todoEdit";
import { createItemActions } from "../common/todoItem/actions";
import { state } from "../common/todoItem/state";
import { getTodoClasses } from "../common/todoItem/display";

export const createTodoItem = propose => {
  const events = createItemActions(propose).events;
  const todoEdit = createTodoEdit(propose);

  return model => todo => {
    const editing = state.editing(model, todo);

    return m("li", { class: getTodoClasses(model, todo) },
      m("div.view",
        m("input.toggle[type=checkbox]", { checked: todo.completed,
          onchange: events.onToggleTodo(todo.id) }),
        m("label", { ondblclick: events.onEditTodo(todo) }, todo.title),
        m("button.destroy", { onclick: events.onDestroyTodo(todo.id) })
      ),
      editing ? todoEdit(model.editTodo) : noTodoEdit
    );
  };
};
