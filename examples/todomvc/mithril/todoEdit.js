import m from "mithril";
import { createEditActions } from "../common/todoEdit/actions";

export const createTodoEdit = propose => {
  const events = createEditActions(propose).events;

  return todo =>
    m("input.edit[type=text]", {
      value: todo.title,
      onkeyup: events.onEditKeyUp(todo.id),
      onblur: events.onEditBlur(todo.id),
      config: function(element) {
        element.focus();
        element.selectionStart = element.value.length;
      }
    });
};

export const noTodoInput = () => m("span");
