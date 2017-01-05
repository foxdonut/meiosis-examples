import m from "mithril";
import { createEditActions } from "../common/todoEdit/actions";

export const createTodoEdit = propose => {
  const events = createEditActions(propose).events;

  return todo =>
    m("input.edit[type=text]", {
      value: todo.title,
      onkeyup: events.onEditKeyUp(todo.id),
      onblur: events.onEditBlur(todo.id),
      oncreate: function(vnode) {
        vnode.dom.focus();
        vnode.dom.selectionStart = vnode.dom.value.length;
      }
    });
};

export const noTodoEdit = m("span");
