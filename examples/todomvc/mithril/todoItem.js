import m from "mithril";
import { todoEdit } from "./todoEdit";
//FIXME
import { getTodoClasses } from "../common/todoItem/display";
const events = { onToggleTodo: () => () => null, onEditTodo: () => () => null, onDestroyTodo: () => () => null  };

export const todoItem = model => todo =>
  m("li", { class: getTodoClasses(model, todo) },
    m("div.view",
      m("input.toggle[type=checkbox]", { checked: todo.completed,
        onchange: events.onToggleTodo(todo.id) }),
      m("label", { ondblclick: events.onEditTodo(todo) }, todo.title),
      m("button.destroy", { onclick: events.onDestroyTodo(todo.id) })
    ),
    todoEdit(model)
  );
