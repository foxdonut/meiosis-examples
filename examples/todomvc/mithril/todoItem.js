import m from "mithril";
import { createTodoEdit } from "./todoEdit";
import { createItemActions } from "../common/todoItem/actions";
//FIXME
import { getTodoClasses } from "../common/todoItem/display";


export const createTodoItem = propose => {
  const events = createItemActions(propose).events;
  const todoEdit = createTodoEdit(propose);

  return model => todo =>
    m("li", { class: getTodoClasses(model, todo) },
      m("div.view",
        m("input.toggle[type=checkbox]", { checked: todo.completed,
          onchange: events.onToggleTodo(todo.id) }),
        m("label", { ondblclick: events.onEditTodo(todo) }, todo.title),
        m("button.destroy", { onclick: events.onDestroyTodo(todo.id) })
      ),
      todoEdit(model.editTodo)
    );
};
