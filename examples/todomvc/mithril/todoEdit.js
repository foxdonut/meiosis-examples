import { propose } from "meiosis";
import m from "mithril";
import { editActions } from "../common/todoEdit/actions";
const events = editActions(propose).events;

export const todoEdit = todo =>
  m("input.edit[type=text]", {
    value: todo.title,
    onkeyup: events.onEditKeyUp(todo.id),
    onblur: events.onEditBlur(todo.id),
    config: function(element) {
      element.focus();
      element.selectionStart = element.value.length;
    }
  });

export const noTodoInput = () => m("span");
